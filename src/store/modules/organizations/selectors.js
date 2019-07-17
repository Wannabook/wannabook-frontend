import { getLoadingProps } from '../../common/selectors';
import * as R from 'ramda';

export const getOrganizationsLoadingProps = getLoadingProps('organizations');
export const getOrganizations = R.pathOr([], ['organizations', 'records']);
