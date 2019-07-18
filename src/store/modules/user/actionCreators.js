import { createAction } from 'redux-actions';
import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from './constants';

export const loadUser = createAction(LOAD_USER_REQUEST);
export const loadUserSuccess = createAction(LOAD_USER_SUCCESS);
export const loadUserFailure = createAction(LOAD_USER_FAILURE);
