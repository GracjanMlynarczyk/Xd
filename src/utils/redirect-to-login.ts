import { urls } from '.';

export default (): void => {
  const myAccountUrl = urls.MY_ACCOUNT_URL;

  const {
    location: { origin, pathname },
  } = window;

  const url = `${myAccountUrl}?redirect_url=${origin}${pathname}`;

  window.location.href = url;
};
