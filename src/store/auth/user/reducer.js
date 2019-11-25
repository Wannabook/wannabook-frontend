import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import {
  INITIAL_STATE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_REQUEST_SUCCESS,
  USER_SIGN_UP_REQUEST_FAILURE,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  USER_SIGN_OUT,
} from './constants';

import { UPDATE_USER_INFO_SUCCESS } from '../updateUserInfo';

import {
  handleLoad as handleLoadUserStart,
  handleLoadFailure as handleRequestFailure,
} from '../../common/reducerHandlers';

export default handleActions(
  {
    [USER_LOGIN_REQUEST]: (state, action) => handleRequestStart(state, action),
    [USER_LOGIN_REQUEST_SUCCESS]: (state, action) =>
      handleSignInSuccess(state, action),
    [USER_LOGIN_REQUEST_FAILURE]: (state, action) =>
      handleSignInFailure(state, action),

    [USER_SIGN_UP_REQUEST]: (state, action) =>
      handleRequestStart(state, action),
    [USER_SIGN_UP_REQUEST_SUCCESS]: (state, action) =>
      handleSignUpSuccess(state, action),
    [USER_SIGN_UP_REQUEST_FAILURE]: (state, action) =>
      handleSignUpFailure(state, action),

    [LOAD_USER_REQUEST]: (state, action) => handleLoadUserStart(state, action),
    [LOAD_USER_SUCCESS]: (state, action) =>
      handleLoadUserSuccess(state, action),
    [LOAD_USER_FAILURE]: (state, action) =>
      handleLoadUserFailure(state, action),

    [UPDATE_USER_INFO_SUCCESS]: (state, action) =>
      handleUpdateUserInfoSuccess(state, action),
    [USER_SIGN_OUT]: (state, action) => handleSignout(state, action),
  },
  INITIAL_STATE
);

const handleRequestStart = (state, { payload }) => {
  return {
    ...state,
    loading: true,
    loaded: false,
    error: '',
  };
};

const handleRequestSuccess = (
  state,
  {
    payload: {
      data: { user },
    },
  }
) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
    profile: user,
  };
};

// TODO: can we reduce duplication in this file?
const handleLoadUserSuccess = (
  state,
  { payload: { user, accessToken, message } }
) => {
  return {
    ...state,
    profile: user,
    loaded: true,
    loading: false,
    accessToken,
    error: message, // message in payload indicates something's gone wrong (for now)
  };
};

const handleLoadUserFailure = (state, { payload }) => {
  return {
    ...state,
    loaded: false,
    loading: false,
    error: R.isEmpty(payload) ? '' : payload,
    profile: null,
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

// Sign in
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

const handleUpdateUserInfoSuccess = (state, { payload }) => {
  return {
    ...state,
    user: { ...payload },
    loading: false,
    loaded: true,
    error: '',
  };
};

const handleSignout = state => ({
  ...state,
  profile: null,
});
