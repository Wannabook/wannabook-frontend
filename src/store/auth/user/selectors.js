import * as R from 'ramda';

import { getLoadingProps } from '../../common/selectors';

export const getLogInLoadingProps = getLoadingProps('auth', 'user');

export const getUser = state => R.pathOr(null, ['auth', 'user', 'user'], state);
