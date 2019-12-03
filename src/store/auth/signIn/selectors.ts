import * as R from 'ramda';

export const getSignInError = state =>
  R.pathOr(null, ['auth', 'signIn', 'error'], state);
