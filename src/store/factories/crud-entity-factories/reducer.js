import { handleActions } from 'redux-actions';

import { INITIAL_STATE } from './initial-state';

export default entity =>
  handleActions(
    {
      [`LOAD_${entity.toUpperCase()}`]: state => handleLoad(state),

      [`LOAD_${entity.toUpperCase()}_SUCCESS`]: (state, { payload }) =>
        handleLoadSuccess(state, { payload }),

      [`LOAD_${entity.toUpperCase()}_FAILURE`]: (state, { payload }) =>
        handleLoadFailure(state, { payload }),
    },
    INITIAL_STATE
  );

const handleLoad = state => {
  return {
    ...state,
    error: '',
    loading: true,
    loaded: false,
  };
};

const handleLoadSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    records: [...payload],
    error: '',
  };
};

const handleLoadFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};
