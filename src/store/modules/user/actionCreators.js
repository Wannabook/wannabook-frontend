import { LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE } from './constants';

export function loadUser() {
  return {
    types: [LOAD_USER, LOAD_USER_SUCCESS, LOAD_USER_FAILURE],
    apiRequest: apiClient => apiClient.get('/user'),
    meta: {},
  };
}
