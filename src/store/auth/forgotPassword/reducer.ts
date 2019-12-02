import { handleActions } from 'redux-actions';

import {
  INITIAL_STATE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
} from './constants';

import {
  handleLoad as handleRequest,
  handleLoadFailure as handleRequestFailure,
} from '../../common/reducerHandlers';
import { ForgotPasswordState } from './types';

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
