import { orgsActions } from './constants';

export function loadOrganizations() {
  return {
    types: Object.keys(orgsActions),
    apiRequest: apiClient => apiClient.get('/organizations'),
    meta: {},
  };
}
