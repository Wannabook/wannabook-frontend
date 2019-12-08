import { createAsyncAction, createStandardAction } from 'typesafe-actions';

import {
  SignInFailurePayload,
  SignInSuccessPayload,
  SingInRequestPayload,
} from './types';

export const logInAction = createAsyncAction(
  'USER_LOGIN_REQUEST',
  'USER_LOGIN_REQUEST_SUCCESS',
  'USER_LOGIN_REQUEST_FAILURE'
)<SingInRequestPayload, SignInSuccessPayload, SignInFailurePayload>();

export const clearLoginError = createStandardAction('CLEAR_LOGIN_ERROR')<
  undefined
>();
