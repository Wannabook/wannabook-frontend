export const getLoadingProps = entity => state => {
  const getLoadingError = state => state[entity]['error'] || '';
  const isLoaded = state => state[entity]['loaded'] || false;
  const isLoading = state => state[entity]['loading'] || false;

  return {
    error: getLoadingError(state),
    loaded: isLoaded(state),
    loading: isLoading(state),
  };
};
