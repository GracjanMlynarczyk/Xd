const apiUrlPlaceholder = '_API_URL';

const getApiUrl = (): string => {
  const element = document.getElementById('runtime-configuration');

  let API_URL = '';

  if (element) {
    const runtimeConfiguration = JSON.parse(element.innerHTML);

    if (runtimeConfiguration.API_URL !== apiUrlPlaceholder) {
      API_URL = runtimeConfiguration.API_URL;
    } else {
      if (!process.env.REACT_APP_API_URL) {
        throw new Error('Required REACT_APP_API_URL is not configured correctly in .env.development file.');
      }

      API_URL = process.env.REACT_APP_API_URL;
    }
  }

  return API_URL;
};

const myAccountPlaceholder = '_MY_ACCOUNT_URL';

const getMyAccountUrl = (): string => {
  const element = document.getElementById('runtime-configuration');
  let MY_ACCOUNT_URL = '';

  if (element) {
    const runtimeConfiguration = JSON.parse(element.innerHTML);

    if (runtimeConfiguration.MY_ACCOUNT_URL !== myAccountPlaceholder) {
      MY_ACCOUNT_URL = runtimeConfiguration.MY_ACCOUNT_URL;
    } else {
      if (!process.env.REACT_APP_MY_ACCOUNT_URL) {
        throw new Error('Required REACT_APP_MY_ACCOUNT_URL is not configured correctly in .env.development file.');
      }

      MY_ACCOUNT_URL = process.env.REACT_APP_MY_ACCOUNT_URL;
    }
  }

  return `${MY_ACCOUNT_URL}/#/signin`;
};

const envPlaceholder = '_ENVIRONMENT';

const getEnvironment = (): string => {
  let ENVIRONMENT = 'unknown';

  const element = document.getElementById('runtime-configuration');
  if (element) {
    const runtimeConfiguration = JSON.parse(element.innerHTML);

    if (runtimeConfiguration.ENVIRONMENT !== envPlaceholder) {
      ENVIRONMENT = runtimeConfiguration.ENVIRONMENT;
    } else {
      if (!process.env.REACT_APP_ENVIRONMENT) {
        throw new Error('Required REACT_APP_ENVIRONMENT is not configured correctly in .env.development file.');
      }

      ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
    }
  }

  return ENVIRONMENT;
};

export default { API_URL: getApiUrl(), MY_ACCOUNT_URL: getMyAccountUrl(), ENVIRONMENT: getEnvironment() };
