import * as R from 'ramda';

export const getSignUpError = state =>
  R.pathOr(null, ['auth', 'signUp', 'error'], state);
