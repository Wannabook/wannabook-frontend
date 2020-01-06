import * as R from 'ramda';
import { createSelector } from 'reselect';

import { EntityInitialState, UserInitialState } from 'types';

import { getLoadingProps } from '../../common';

export const getLogInLoadingProps = getLoadingProps('auth', 'user');

export const getUser = (state: UserInitialState) =>
  R.pathOr(null, ['auth', 'user', 'profile'], state);

export const isUserLoggedIn = createSelector(
  getLogInLoadingProps,
  getUser,
  ({ loaded }, user) => {
    // we initially consider a user logged in and only when we receive a response
    // telling otherwise do we change loggedIn to false
    return Boolean(loaded && user);
  }
);

export const getLoadUserError = (state: EntityInitialState) =>
  R.pathOr(null, ['auth', 'user', 'error'], state);
