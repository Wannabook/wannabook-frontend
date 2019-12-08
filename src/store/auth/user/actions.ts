import { createAsyncAction, createStandardAction } from 'typesafe-actions';

import { LoadUserFailurePayload, LoadUserSuccessPayload } from './types';

export const loadUserAction = createAsyncAction(
  'LOAD_USER_REQUEST',
  'LOAD_USER_SUCCESS',
  'LOAD_USER_FAILURE'
)<undefined, LoadUserSuccessPayload, LoadUserFailurePayload>();

export const loadUserUnauthorized = createStandardAction(
  'LOAD_USER_UNAUTHORIZED'
)<undefined>();

export const signOut = createStandardAction('USER_SIGN_OUT')<undefined>();
