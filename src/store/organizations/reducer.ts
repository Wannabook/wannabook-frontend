import { handleActions } from 'redux-actions';

import {
  LOAD_ORGANIZATIONS_REQUEST,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
} from './constants';
import { handleLoad, handleLoadFailure } from '../common';
import { EntityInitialState, EntityLoadSuccessPayload } from '../../types';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  // error: '',
  // records: null,
};

export const organizationsReducer = handleActions(
  {
    [LOAD_ORGANIZATIONS_REQUEST]: state => handleLoad(state),
    // TODO: move organizations to Typesafe actions and get rid of 'any'
    [LOAD_ORGANIZATIONS_SUCCESS]: (state, action: any) =>
      handleLoadSuccess(state, action),
    [LOAD_ORGANIZATIONS_FAILURE]: (state, action) =>
      handleLoadFailure(state, action),
  },
  INITIAL_STATE
);

const handleLoadSuccess = (
  state: EntityInitialState,
  { payload }: EntityLoadSuccessPayload
) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    records: payload && [...payload],
  };
};
