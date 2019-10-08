import * as R from 'ramda';
import { getLoadingProps } from '../../../common/selectors';

export const getLogInLoadingProps = getLoadingProps('client', 'logIn');

export const getUser = state =>
  R.pathOr('', ['client', 'logIn', 'user'])(state);
