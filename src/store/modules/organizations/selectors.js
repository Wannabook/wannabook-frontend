import { getLoadingProps } from '../../factories/crud-entity-factories/selectors';
import * as R from 'ramda';

export const getOrganizationsLoadingProps = getLoadingProps('organizations');
export const getOrganizations = R.pathOr([], ['organizations', 'records']);
