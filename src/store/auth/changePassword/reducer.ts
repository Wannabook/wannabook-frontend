import { handleActions } from 'redux-actions';

import {
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
  UPDATE_USER_PASSWORD_INIT,
} from './constants';

import {
  handleLoad as handleUpdate,
  handleLoadFailure as handleUpdateFailure,
} from '../../common/reducerHandlers';
import { ChangePasswordState } from './types';

const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
};

export default handleActions(
  {
    [UPDATE_USER_PASSWORD_REQUEST]: state => handleUpdate(state),
    [UPDATE_USER_PASSWORD_SUCCESS]: state => handleUpdateSuccess(state),
    [UPDATE_USER_PASSWORD_FAILURE]: (state, action) =>
      handleUpdateFailure(state, action),
    [UPDATE_USER_PASSWORD_INIT]: () => handleUpdateInit(),
  },
  INITIAL_STATE
);

const handleUpdateSuccess = (state: ChangePasswordState) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: '',
  };
};

const handleUpdateInit = () => {
  return INITIAL_STATE;
};
