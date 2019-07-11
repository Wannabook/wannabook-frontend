import { updateUserPasswordActions, setInitStateAction } from './constants';

export function changePassword(passwords) {
  return {
    types: Object.keys(updateUserPasswordActions),
    apiRequest: apiClient => apiClient.post('/user/me/change-password'),
    meta: {
      passwords,
    },
  };
}

export function resetChangePasswordRequestState() {
  return {
    type: Object.keys(setInitStateAction),
  };
}
