import { ACCESS_TOKEN, AUTH_METHOD, ID_TOKEN } from 'consts';

export const unauthorized = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(ID_TOKEN);
  localStorage.removeItem(AUTH_METHOD);

  // Calling this action we should also remove user from store

  // TODO show some message that we're not authorized (if needed)
};
