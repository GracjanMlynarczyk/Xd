import { redirectToLogin } from '@utils';
import { AppThunk } from '../store';
import { loginWithToken, logout } from './api';
import { LoginUserPayload, sliceActions } from './slice';

const { loginUserSuccess, logoutUserSuccess, loginUserError } = sliceActions;

export const loginUser =
  (token: string): AppThunk =>
  async (dispatch) => {
    try {
      const {
        data: {
          result: { user_data: userData },
        },
      } = await loginWithToken(token);

      const { email } = userData;

      localStorage.setItem('token', token);

      const payload: LoginUserPayload = {
        email,
      };

      dispatch(loginUserSuccess(payload));
    } catch (error) {
      if (error.response && (error.response.status === 403 || error.response.status === 401)) {
        localStorage.removeItem('token');
        redirectToLogin();
        return;
      }
      dispatch(loginUserError());
      window.location.replace('/error');
    }
  };

export const logoutUser = (): AppThunk => async (dispatch) => {
  try {
    await logout();
  } finally {
    localStorage.removeItem('token');
    dispatch(logoutUserSuccess());
    redirectToLogin();
  }
};
