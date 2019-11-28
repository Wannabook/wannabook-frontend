import { createAction } from 'redux-actions';

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
  CLEAR_LOGIN_ERROR,
} from './constants';

export const logInRequest = createAction(
  USER_LOGIN_REQUEST,
  payload => payload
);
export const logInRequestSuccess = createAction(
  USER_LOGIN_REQUEST_SUCCESS,
  payload => payload
);
export const logInRequestFailure = createAction(
  USER_LOGIN_REQUEST_FAILURE,
  payload => payload
);

export const clearLoginError = createAction(CLEAR_LOGIN_ERROR);
