import { handleActions } from 'redux-actions';
import * as R from 'ramda';

import {
  INITIAL_STATE,
  LOAD_USER_SUCCESS,
  LOAD_USER_UNAUTHORIZED,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  USER_SIGN_OUT,
} from './constants';

import { UPDATE_USER_INFO_SUCCESS } from '../updateUserInfo';

export default handleActions(
  {
    [LOAD_USER_REQUEST]: (state, action) => handleRequestStart(state, action),
    [LOAD_USER_SUCCESS]: (state, action) =>
      handleLoadUserSuccess(state, action),
    [LOAD_USER_UNAUTHORIZED]: (state, action) =>
      handleLoadUserUnauthorized(state, action),
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

const handleLoadUserUnauthorized = state => {
  return {
    ...state,
    profile: null,
    loaded: true,
    loading: false,
    accessToken: null,
    // if user if unauthorized, we don't need any error message in store,
    // otherwise our forms will have this error message underneath whenever
    // an unauthorized user enters pages with these forms
    error: null,
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
