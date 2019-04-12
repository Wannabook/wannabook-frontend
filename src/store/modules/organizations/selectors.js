export const getOrganizations = state => state.organization.records || [];

export const getOrganizationsLoadingProps = state => ({
  error: getOrganizationsLoadingError(state),
  loaded: isOrganizationsLoaded(state),
  loading: isOrganizationsLoading(state),
});

const getOrganizationsLoadingError = state => state.organization.error || '';
const isOrganizationsLoaded = state => state.organization.loaded || false;
const isOrganizationsLoading = state => state.organization.loading || false;
