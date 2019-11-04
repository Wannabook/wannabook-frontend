import { createAction } from 'redux-actions';

import {
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
  UPDATE_USER_PASSWORD_INIT,
} from './constants';

export const changePassword = createAction(UPDATE_USER_PASSWORD_REQUEST);
export const changePasswordSuccess = createAction(UPDATE_USER_PASSWORD_SUCCESS);
export const changePasswordFailure = createAction(UPDATE_USER_PASSWORD_FAILURE);
export const resetChangePasswordRequestState = createAction(
  UPDATE_USER_PASSWORD_INIT
);
