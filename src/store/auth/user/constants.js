export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_REQUEST_SUCCESS = 'USER_LOGIN_REQUEST_SUCCESS';
export const USER_LOGIN_REQUEST_FAILURE = 'USER_LOGIN_REQUEST_FAILURE';

export const USER_SIGN_UP_REQUEST = 'USER_SIGN_UP_REQUEST';
export const USER_SIGN_UP_REQUEST_SUCCESS = 'USER_SIGN_UP_REQUEST_SUCCESS';
export const USER_SIGN_UP_REQUEST_FAILURE = 'USER_SIGN_UP_REQUEST_FAILURE';

export const USER_SIGN_OUT = 'USER_SIGN_OUT';

export const LOAD_USER = 'LOAD_USER';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  accessToken: null,
};
