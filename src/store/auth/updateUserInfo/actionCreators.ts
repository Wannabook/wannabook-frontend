import { createAction } from 'redux-actions';

import {
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from './constants';

export const updateUserInfo = createAction(UPDATE_USER_INFO_REQUEST);
export const updateUserInfoSuccess = createAction(UPDATE_USER_INFO_SUCCESS);
export const updateUserInfoFailure = createAction(UPDATE_USER_INFO_FAILURE);
