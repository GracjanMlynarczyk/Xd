import { generatePath } from 'react-router';
import urls from '@utils/runtime-config';

const VERSION = '/v1';
const API_URL = `${urls.API_URL}${VERSION}`;

export const appUrls = {
  errors: {
    notFound: '/404',
  },
  portal: {
    home: '/',
  },
  app: {
    dashboard: '/app/dashboard',
  },
};

export const apiUrls = {
  user: {
    loginWithToken: {
      resolve: (token: string): string => {
        const url = generatePath('/auth/login/:token', { token });
        return `${API_URL}${url}`;
      },
    },
    logout: `${API_URL}/auth/logout`,
  },
};

export const outerUrls = {};
