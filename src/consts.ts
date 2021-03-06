export const ACCESS_TOKEN = 'accessToken';
export const AUTH_METHOD = 'authMethod';
export const ID_TOKEN = 'idToken';

export const API_ENDPOINTS = {
  me: 'users/me',
  signout: 'users/logout',
  logout: 'users/logout',
};

// TODO: should be in single place for both backend and frontend
export const AUTH_METHODS = {
  FB: 'facebook',
  GOOGLE: 'google',
  LOGIN_PASSWORD: 'login-password',
  VK: 'vk',
  ODNOKLASSNIKI: 'ok',
};

export const TOKEN_GRABBER_URL_REGEX = /\/auth\/.+\/token/;
