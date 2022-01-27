/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './types';

const initialState: UserState = {
  isLoggedIn: false,
  email: '',
};

export type LoginUserPayload = {
  email: string;
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUserSuccess: (state: UserState, { payload }: PayloadAction<LoginUserPayload>) => {
      const { email } = payload;

      state.isLoggedIn = true;
      state.email = email;
    },
    loginUserError: (state: UserState) => {
      state.isLoggedIn = false;
    },
    logoutUserSuccess: (state: UserState) => {
      state.isLoggedIn = false;
    },
  },
});

export const sliceActions = slice.actions;

export default slice.reducer;
