import * as R from 'ramda';
import { createSelector } from 'reselect';

import { getLoadingProps } from '../../common/selectors';

export const getLogInLoadingProps = getLoadingProps('auth', 'user');

export const getUser = state =>
  R.pathOr(null, ['auth', 'user', 'profile'], state);

export const isUserLoggedIn = createSelector(
  getLogInLoadingProps,
  getUser,
  ({ loading, loaded }, user) => {
    // we initially consider a user logged in and only when we receive a response
    // telling otherwise do we change loggedIn to false
    return Boolean(loaded && user);
  }
);

export const getLoadUserError = state =>
  R.pathOr(null, ['auth', 'user', 'error'], state);
