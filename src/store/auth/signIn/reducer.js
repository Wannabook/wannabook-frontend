import { handleActions } from 'redux-actions';

import {
  INITIAL_STATE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
  CLEAR_LOGIN_ERROR,
} from './constants';

export default handleActions(
  {
    [USER_LOGIN_REQUEST]: (state, action) => handleRequestStart(state, action),
    [USER_LOGIN_REQUEST_SUCCESS]: (state, action) =>
      handleSignInSuccess(state, action),
    [USER_LOGIN_REQUEST_FAILURE]: (state, action) =>
      handleSignInFailure(state, action),
    [CLEAR_LOGIN_ERROR]: (state, action) => handleClearError(state, action),
  },
  INITIAL_STATE
);

const handleClearError = state => {
  return {
    ...state,
    error: '',
  };
};

const handleRequestStart = state => {
  return {
    ...state,
    loading: true,
    loaded: false,
    error: '',
  };
};

const handleSignInSuccess = (state, { payload: { data, message } }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: message,
    profile: data?.user,
    accessToken: data?.token,
  };
};

const handleSignInFailure = (state, { payload: { message } }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: message,
  };
};
