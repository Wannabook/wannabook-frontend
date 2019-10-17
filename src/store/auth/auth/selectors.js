import * as R from 'ramda';
import { getLoadingProps } from '../../common/selectors';

export const getLogInLoadingProps = getLoadingProps('auth', 'auth');

export const getUser = state => R.pathOr(null, ['auth', 'auth', 'user'], state);
