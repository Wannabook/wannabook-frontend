export const LOAD_ORGANIZATIONS_REQUEST = 'LOAD_ORGANIZATIONS_REQUEST';
export const LOAD_ORGANIZATIONS_SUCCESS = 'LOAD_ORGANIZATIONS_SUCCESS';
export const LOAD_ORGANIZATIONS_FAILURE = 'LOAD_ORGANIZATIONS_FAILURE';

export const INITIAL_STATE = {
  loading: false,
  loaded: false,
  error: '',
  records: [],
};
