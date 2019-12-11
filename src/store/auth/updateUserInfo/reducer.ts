import { handleActions } from 'redux-actions';

import {
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from './constants';

import {
  handleLoad as handleRequest,
  handleLoadFailure as handleRequestFailure,
} from '../../common/reducerHandlers';
import { EntityInitialState } from '../../../types';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  // error: '',
};

// TODO: refactor to Typesafe actions in WNB-202
export default handleActions(
  {
    [UPDATE_USER_INFO_REQUEST]: state => handleRequest(state),
    [UPDATE_USER_INFO_SUCCESS]: state => handleRequestSuccess(state),
    [UPDATE_USER_INFO_FAILURE]: (state, action) =>
      handleRequestFailure(state, action),
  },
  INITIAL_STATE
);

const handleRequestSuccess = (state: EntityInitialState) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
  };
};
