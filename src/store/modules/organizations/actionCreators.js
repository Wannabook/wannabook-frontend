import {
  LOAD_ORGANIZATIONS,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
} from './constants';

export function loadOrganizations() {
  return {
    types: [
      LOAD_ORGANIZATIONS,
      LOAD_ORGANIZATIONS_SUCCESS,
      LOAD_ORGANIZATIONS_FAILURE,
    ],
    apiRequest: apiClient => apiClient.get('/organizations'),
    meta: {},
  };
}
