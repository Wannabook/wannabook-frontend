import { getLoadingProps } from '../../crud-entity-factories/selectors';
import * as R from 'ramda';

export const getUser = R.pathOr({}, ['user', 'records', '0']);
export const getUserLoadingProps = getLoadingProps('user');
