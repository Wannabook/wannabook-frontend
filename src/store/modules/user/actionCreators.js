import { userActions } from './constants';

export function loadUser() {
  return {
    types: Object.keys(userActions),
    apiRequest: apiClient => apiClient.get('/user/me'),
    meta: {},
  };
}
