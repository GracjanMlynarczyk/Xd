import { apiUrls } from '@urls';
import { AxiosResponse } from 'axios';
import { Methods, request } from '@utils/api';

export const loginWithToken = async (token: string): Promise<AxiosResponse> => {
  const {
    user: { loginWithToken },
  } = apiUrls;

  return request(loginWithToken.resolve(token), Methods.get);
};

export const logout = async (): Promise<AxiosResponse> => {
  const {
    user: { logout },
  } = apiUrls;

  return request(logout, Methods.get);
};
