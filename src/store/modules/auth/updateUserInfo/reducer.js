import { handleActions } from 'redux-actions';
import {
  INITIAL_STATE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from './constants';

import {
  handleLoad as handleRequest,
  handleLoadFailure as handleRequestFailure,
} from '../../../common/reducerHandlers';

export default handleActions(
  {
    [UPDATE_USER_INFO_REQUEST]: state => handleRequest(state),
    [UPDATE_USER_INFO_SUCCESS]: state => handleRequestSuccess(state),
    [UPDATE_USER_INFO_FAILURE]: (state, action) =>
      handleRequestFailure(state, action),
  },
  INITIAL_STATE
);

const handleRequestSuccess = state => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
  };
};
