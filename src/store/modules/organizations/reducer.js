import { handleActions } from 'redux-actions';

import {
  INITIAL_STATE,
  LOAD_ORGANIZATIONS,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
} from './constants';

const reducer = handleActions(
  {
    [LOAD_ORGANIZATIONS]: state => handleLoadOrganizations(state),

    [LOAD_ORGANIZATIONS_SUCCESS]: (state, { payload }) =>
      handleLoadOrganizationsSuccess(state, { payload }),

    [LOAD_ORGANIZATIONS_FAILURE]: (state, { payload }) =>
      handleLoadOrganizationsFailure(state, { payload }),
  },
  INITIAL_STATE
);

const handleLoadOrganizations = state => {
  return {
    ...state,
    loading: true,
    loaded: false,
  };
};

const handleLoadOrganizationsSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
    records: [...payload],
  };
};

const handleLoadOrganizationsFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};

export default reducer;
