import { handleActions } from 'redux-actions';
import {
  INITIAL_STATE,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
  UPDATE_USER_PASSWORD_INIT,
} from './constants';

import {
  handleLoad as handleUpdate,
  handleLoadFailure as handleUpdateFailure,
} from '../../../common/reducerHandlers';

export default handleActions(
  {
    [UPDATE_USER_PASSWORD_REQUEST]: state => handleUpdate(state),
    [UPDATE_USER_PASSWORD_SUCCESS]: state => handleUpdateSuccess(state),
    [UPDATE_USER_PASSWORD_FAILURE]: (state, action) =>
      handleUpdateFailure(state, action),
    [UPDATE_USER_PASSWORD_INIT]: state => handleUpdateInit(state),
  },
  INITIAL_STATE
);

const handleUpdateSuccess = state => {
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
