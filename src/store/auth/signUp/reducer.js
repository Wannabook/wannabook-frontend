import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import {
  INITIAL_STATE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_REQUEST_SUCCESS,
  USER_SIGN_UP_REQUEST_FAILURE,
  CLEAR_SIGNUP_ERROR,
} from './constants';

export default handleActions(
  {
    [USER_SIGN_UP_REQUEST]: (state, action) =>
      handleRequestStart(state, action),
    [USER_SIGN_UP_REQUEST_SUCCESS]: (state, action) =>
      handleSignUpSuccess(state, action),
    [USER_SIGN_UP_REQUEST_FAILURE]: (state, action) =>
      handleSignUpFailure(state, action),
    [CLEAR_SIGNUP_ERROR]: (state, action) => handleClearError(state, action),
  },
  INITIAL_STATE
);

const handleClearError = state => {
  return {
    ...state,
    error: '',
  };
};

const handleRequestStart = (state, { payload }) => {
  return {
    ...state,
    loading: true,
    loaded: false,
    error: '',
  };
};

const handleSignUpSuccess = (state, { payload: { data, message } }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: message,
    profile: data?.user,
    accessToken: data?.token,
  };
};

const handleSignUpFailure = (state, { payload: { message } }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: message,
  };
};
