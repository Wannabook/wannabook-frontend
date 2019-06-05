import { getLoadingProps } from '../../crud-entity-factories/selectors';

export const getOrganizations = state => state.organizations.records || [];
export const getOrganizationsLoadingProps = getLoadingProps('organizations');
