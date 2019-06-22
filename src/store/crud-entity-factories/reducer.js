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
    loading: true,
    loaded: false,
  };
};

const handleLoadSuccess = (state, { payload }) => {
  const finalPayload = {
    ...state,
    loading: false,
    loaded: true,
    error: '',
  };

  if (typeof payload !== 'object') {
    return { ...finalPayload, records: payload };
  }

  return {
    ...finalPayload,
    records: Array.isArray(payload) ? [...payload] : { ...payload },
  };
};

const handleLoadFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: typeof payload === 'object' ? { ...payload } : payload,
  };
};
