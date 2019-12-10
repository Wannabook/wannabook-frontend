import { handleActions } from 'redux-actions';

import {
  LOAD_ORGANIZATIONS_REQUEST,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
} from './constants';
import { handleLoad, handleLoadFailure } from '../common/reducerHandlers';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  records: [],
};

export const organizationsReducer = handleActions(
  {
    [LOAD_ORGANIZATIONS_REQUEST]: state => handleLoad(state),
    [LOAD_ORGANIZATIONS_SUCCESS]: (state, action) =>
      handleLoadSuccess(state, action),
    [LOAD_ORGANIZATIONS_FAILURE]: (state, action) =>
      handleLoadFailure(state, action),
  },
  INITIAL_STATE
);

const handleLoadSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    records: [...payload],
    error: '',
  };
};
