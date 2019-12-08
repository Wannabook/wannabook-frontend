import { ActionType, createReducer } from 'typesafe-actions';

import { EntityInitialState } from 'types';

import * as actions from './actions';

const initialState = {
  loading: false,
  loaded: false,
  error: '',
};

type SignUpActions = ActionType<typeof actions>;

export const signUpReducer = createReducer<EntityInitialState, SignUpActions>(
  initialState,
  {
    CLEAR_SIGN_UP_ERROR: state => ({
      ...state,
      error: '',
    }),
    USER_SIGN_UP_REQUEST: state => {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    },
    USER_SIGN_UP_SUCCESS: (state, { payload: { data, message } }) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: message,
        profile: data?.user,
        accessToken: data?.token,
      };
    },
    USER_SIGN_UP_FAILURE: (state, { payload: { message } }) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: message,
      };
    },
  }
);
