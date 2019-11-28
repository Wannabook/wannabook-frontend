import { createAction } from 'redux-actions';

import {
  LOAD_USER_REQUEST,
  LOAD_USER_UNAUTHORIZED,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  USER_SIGN_OUT,
} from './constants';

export const signOut = createAction(USER_SIGN_OUT);

export const loadUserRequest = createAction(LOAD_USER_REQUEST);
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS);
export const loadUserUnauthorized = createAction(LOAD_USER_UNAUTHORIZED);
export const loadUserFailure = createAction(LOAD_USER_FAILURE);
