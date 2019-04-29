export const getUser = state => state.user.records || [];

export const getUserLoadingProps = state => ({
  error: getUserLoadingError(state),
  loaded: isUserLoaded(state),
  loading: isUserLoading(state),
});

const getUserLoadingError = state => state.user.error || '';
const isUserLoaded = state => state.user.loaded || false;
const isUserLoading = state => state.user.loading || false;
