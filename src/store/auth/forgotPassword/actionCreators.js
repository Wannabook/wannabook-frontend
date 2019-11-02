import { createAction } from 'redux-actions';

import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './constants';

export const forgotPassword = createAction(
  FORGOT_PASSWORD_REQUEST,
  payload => payload
);
export const forgotPasswordSuccess = createAction(FORGOT_PASSWORD_SUCCESS);
export const forgotPasswordFailure = createAction(FORGOT_PASSWORD_FAILURE);
