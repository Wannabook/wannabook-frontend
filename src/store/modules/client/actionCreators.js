import { updateUserPasswordActions } from './constants';

export function changePassword(passwords) {
  return {
    types: Object.keys(updateUserPasswordActions),
    apiRequest: apiClient => apiClient.post('/user/me/change-password'),
    meta: {
      passwords,
    },
  };
}

// export const changePassword = passwords => {
//   console.log("changePassword action")
//   return { type: 'CHANGE_PASSWORD_ACTION', meta: { passwords } };
// };
