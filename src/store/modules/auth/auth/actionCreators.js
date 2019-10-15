import { createAction } from 'redux-actions';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_REQUEST_SUCCESS,
  USER_SIGN_UP_REQUEST_FAILURE,
  LOAD_USER,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
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

export const loadUser = createAction(LOAD_USER);
export const loadUserRequest = createAction(LOAD_USER_REQUEST);
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS);
export const loadUserFailure = createAction(LOAD_USER_FAILURE);
