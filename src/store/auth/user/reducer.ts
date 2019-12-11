import { ActionType, createReducer } from 'typesafe-actions';
import * as R from 'ramda';

import { EntityInitialState } from 'types';

import * as actions from './actions';

const initialState = {
  loading: false,
  loaded: false,
  error: '',
  accessToken: null,
  profile: null,
};

type UserActions = ActionType<typeof actions>;

export const loadUserReducer = createReducer<EntityInitialState, UserActions>(
  initialState,
  {
    LOAD_USER_REQUEST: state => {
      return {
        ...state,
        loading: true,
        loaded: false,
        error: '',
      };
    },
    LOAD_USER_SUCCESS: (state, { payload: { user, accessToken, message } }) => {
      return {
        ...state,
        profile: user,
        loaded: true,
        loading: false,
        accessToken,
        error: message, // message in payload indicates something's gone wrong (for now)
      };
    },
    LOAD_USER_FAILURE: (state, { payload }) => {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: R.isEmpty(payload) ? '' : payload,
        profile: null,
      };
    },
    LOAD_USER_UNAUTHORIZED: state => {
      return {
        ...state,
        profile: null,
        loaded: true,
        loading: false,
        accessToken: null,
        // if user is unauthorized, we don't need any error message in store,
        // otherwise our forms will have this error message underneath whenever
        // an unauthorized user enters pages with these forms
        error: null,
      };
    },
    USER_SIGN_OUT: state => ({
      ...state,
      profile: null,
    }),
  }
);
