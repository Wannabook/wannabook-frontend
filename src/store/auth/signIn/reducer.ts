import { ActionType, createReducer } from 'typesafe-actions';

import { EntityInitialState } from '../../../types';
import * as actions from './actionCreators';

const signInInitialState = {
  loading: false,
  loaded: false,
  error: '',
};

type SignInActions = ActionType<typeof actions>;

export const signInReducer = createReducer<EntityInitialState, SignInActions>(
  signInInitialState,
  {
    USER_LOGIN_REQUEST: state => ({
      ...state,
      loading: true,
    }),
    USER_LOGIN_REQUEST_SUCCESS: (
      state: EntityInitialState,
      { payload: { message, data } }
    ) => ({
      ...state,
      loading: false,
      loaded: true,
      error: message,
      profile: data?.user,
      accessToken: data?.token,
    }),
    USER_LOGIN_REQUEST_FAILURE: (
      state: EntityInitialState,
      { payload: { message } }
    ) => ({
      ...state,
      loading: false,
      loaded: true,
      error: message,
    }),
    CLEAR_LOGIN_ERROR: (state: EntityInitialState) => ({
      ...state,
      error: '',
    }),
  }
);
