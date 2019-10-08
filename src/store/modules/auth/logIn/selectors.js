import * as R from 'ramda';
import { getLoadingProps } from '../../../common/selectors';

export const getLogInLoadingProps = getLoadingProps('auth', 'logIn');

export const getUser = state => R.pathOr('', ['auth', 'logIn', 'user'], state);
