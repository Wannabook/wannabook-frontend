import { createAction } from 'redux-actions';
import {
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from './constants';

export const updateUserInfo = createAction(
  UPDATE_USER_INFO_REQUEST,
  payload => payload
);
export const updateUserInfoSuccess = createAction(
  UPDATE_USER_INFO_SUCCESS,
  payload => payload
);
export const updateUserInfoFailure = createAction(UPDATE_USER_INFO_FAILURE);
