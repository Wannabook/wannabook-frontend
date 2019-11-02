import * as R from 'ramda';

import { getLoadingProps } from '../common/selectors';

export const getOrganizationsLoadingProps = getLoadingProps('organizations');
export const getOrganizations = R.pathOr([], ['organizations', 'records']);
