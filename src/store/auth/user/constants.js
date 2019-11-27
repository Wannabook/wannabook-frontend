export const USER_SIGN_OUT = 'USER_SIGN_OUT';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_UNAUTHORIZED = 'LOAD_USER_UNAUTHORIZED';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  accessToken: null,
  profile: null,
};
