import { handleActions } from 'redux-actions';
import {
  INITIAL_STATE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from './constants';
import { handleLoad, handleLoadFailure } from '../../common/reducerHandlers';

export default handleActions(
  {
    [LOAD_USER_REQUEST]: state => handleLoad(state),
    [LOAD_USER_SUCCESS]: (state, action) => handleLoadSuccess(state, action),
    [LOAD_USER_FAILURE]: (state, action) => handleLoadFailure(state, action),
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
