import { createAction } from 'redux-actions';

export const startGoogleAuth = createAction('START_GOOGLE_AUTH');
export const startLoginPasswordAuth = createAction('START_LOGIN_PASSWORD_AUTH');
export const startLoginPasswordSignup = createAction(
  'START_LOGIN_PASSWORD_SIGNUP'
);
