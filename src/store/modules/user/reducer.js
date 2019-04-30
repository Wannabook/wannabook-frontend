import { handleActions } from 'redux-actions';

import {
  INITIAL_STATE,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from './constants';

const reducer = handleActions(
  {
    [LOAD_USER]: state => handleLoadUser(state),

    [LOAD_USER_SUCCESS]: (state, { payload }) =>
      handleLoadUserSuccess(state, { payload }),

    [LOAD_USER_FAILURE]: (state, { payload }) =>
      handleLoadUserFailure(state, { payload }),
  },
  INITIAL_STATE
);

const handleLoadUser = state => {
  return {
    ...state,
    loading: true,
    loaded: false,
  };
};

const handleLoadUserSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
    userInfo: payload.user,
    token: payload.token,
  };
};

const handleLoadUserFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};

export default reducer;
