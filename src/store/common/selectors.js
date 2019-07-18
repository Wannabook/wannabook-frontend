import * as R from 'ramda';

export const getLoadingProps = (...args) => state => {
  const getLoadingError = R.pathOr('', [...args, 'error']);
  const isLoaded = R.pathOr(false, [...args, 'loaded']);
  const isLoading = R.pathOr(false, [...args, 'loading']);

  return {
    error: getLoadingError(state),
    loaded: isLoaded(state),
    loading: isLoading(state),
  };
};
