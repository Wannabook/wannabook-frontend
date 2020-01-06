import { createAsyncAction, createStandardAction } from 'typesafe-actions';

import {
  SignInFailurePayload,
  SignInSuccessPayload,
  SignInRequestPayload,
} from './types';

export const logInAction = createAsyncAction(
  'USER_LOGIN_REQUEST',
  'USER_LOGIN_REQUEST_SUCCESS',
  'USER_LOGIN_REQUEST_FAILURE'
)<SignInRequestPayload, SignInSuccessPayload, SignInFailurePayload>();

export const clearLoginError = createStandardAction('CLEAR_LOGIN_ERROR')<
  undefined
>();
