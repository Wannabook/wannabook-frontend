import { handleActions } from 'redux-actions';

import { INITIAL_STATE } from './initial-state';

export default (action, entity, field) =>
  handleActions(
    {
      [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}`]: state =>
        handleUpdate(state),

      [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_SUCCESS`]: state =>
        handleUpdateSuccess(state),

      [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_FAILURE`]: (
        state,
        { payload }
      ) => handleUpdateFailure(state, { payload }),

      [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_INIT`]: state =>
        handleUpdateInit(state),
    },
    INITIAL_STATE
  );

const handleUpdate = state => {
  return {
    ...state,
    error: '',
    loading: true,
    loaded: false,
  };
};

const handleUpdateSuccess = state => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
  };
};

const handleUpdateFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};

const handleUpdateInit = () => {
  return INITIAL_STATE;
};
