export const getOrganizations = state => state.organizations.records || [];

export const getOrganizationsLoadingProps = state => ({
  error: getOrganizationsLoadingError(state),
  loaded: isOrganizationsLoaded(state),
  loading: isOrganizationsLoading(state),
});

const getOrganizationsLoadingError = state => state.organizations.error || '';
const isOrganizationsLoaded = state => state.organizations.loaded || false;
const isOrganizationsLoading = state => state.organizations.loading || false;
