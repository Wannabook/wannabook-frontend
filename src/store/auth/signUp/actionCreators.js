import { createAction } from 'redux-actions';

import {
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_REQUEST_SUCCESS,
  USER_SIGN_UP_REQUEST_FAILURE,
  CLEAR_SIGNUP_ERROR,
} from './constants';

export const signUpRequest = createAction(
  USER_SIGN_UP_REQUEST,
  payload => payload
);
export const signUpRequestSuccess = createAction(
  USER_SIGN_UP_REQUEST_SUCCESS,
  payload => payload
);
export const signUpRequestFailure = createAction(
  USER_SIGN_UP_REQUEST_FAILURE,
  payload => payload
);

export const clearSignupError = createAction(CLEAR_SIGNUP_ERROR);
