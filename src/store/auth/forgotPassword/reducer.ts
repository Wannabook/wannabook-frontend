import { handleActions } from 'redux-actions';

import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './constants';

import {
  handleLoad as handleRequest,
  handleLoadFailure as handleRequestFailure,
} from '../../common/reducerHandlers';
import { ForgotPasswordState } from './types';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
};

export default handleActions(
  {
    [FORGOT_PASSWORD_REQUEST]: state => handleRequest(state),
    [FORGOT_PASSWORD_SUCCESS]: state => handleRequestSuccess(state),
    [FORGOT_PASSWORD_FAILURE]: (state, action) =>
      handleRequestFailure(state, action),
  },
  INITIAL_STATE
);

const handleRequestSuccess = (state: ForgotPasswordState) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
  };
};
