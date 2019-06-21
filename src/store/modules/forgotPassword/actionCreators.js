import { forgotPasswordActions } from './constants';

export function sendEmailForNewPassword(email) {
  //put action creator here
  return {
    types: Object.keys(forgotPasswordActions),
    apiRequest: apiClient =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(email);
        }, 2000);
      }),
    meta: {},
  };
}

export function resetEmailForNewPassword() {
  return {
    type: `LOAD_FORGOTPASSWORD_FAILURE`,
  };
}
