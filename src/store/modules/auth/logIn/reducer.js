import { handleActions } from 'redux-actions';
import {
  INITIAL_STATE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REQUEST_SUCCESS,
  USER_LOGIN_REQUEST_FAILURE,
} from './constants';

import { handleLoadFailure as handleRequestFailure } from '../../../common/reducerHandlers';

export default handleActions(
  {
    [USER_LOGIN_REQUEST]: (state, action) => handleRequest(state, action),
    [USER_LOGIN_REQUEST_SUCCESS]: (state, action) =>
      handleRequestSuccess(state, action),
    [USER_LOGIN_REQUEST_FAILURE]: (state, action) =>
      handleRequestFailure(state, action),
  },
  INITIAL_STATE
);

const handleRequest = (state, { payload }) => {
  return {
    ...state,
    loading: true,
    loaded: false,
    error: '',
  };
};

const handleRequestSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
    user: { ...payload },
  };
};
