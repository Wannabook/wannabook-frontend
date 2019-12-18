import { createAsyncAction, createStandardAction } from 'typesafe-actions';

import {
  SignUpFailurePayload,
  SignUpSuccessPayload,
  SignUpRequestPayload,
} from './types';

export const signUpAction = createAsyncAction(
  'USER_SIGN_UP_REQUEST',
  'USER_SIGN_UP_SUCCESS',
  'USER_SIGN_UP_FAILURE'
)<SignUpRequestPayload, SignUpSuccessPayload, SignUpFailurePayload>();

export const clearSignUpError = createStandardAction('CLEAR_SIGN_UP_ERROR')<
  undefined
>();
