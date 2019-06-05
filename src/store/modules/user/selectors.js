import { getLoadingProps } from '../../crud-entity-factories/selectors';

export const getUser = state => state.user.records[0] || {};
export const getUserLoadingProps = getLoadingProps('user');
