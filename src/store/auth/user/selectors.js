import * as R from 'ramda';

import { getLoadingProps } from '../../common/selectors';

export const getLogInLoadingProps = getLoadingProps('auth', 'user');

export const getUser = state =>
  R.pathOr(null, ['auth', 'user', 'profile'], state);

export const getAuthError = state =>
  R.pathOr(null, ['auth', 'user', 'error'], state);
