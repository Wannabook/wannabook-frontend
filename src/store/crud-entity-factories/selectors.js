import * as R from 'ramda';

export const getLoadingProps = entity => state => {
  const getLoadingError = R.pathOr('', [entity, 'error']);
  const isLoaded = R.pathOr(false, [entity, 'loaded']);
  const isLoading = R.pathOr(false, [entity, 'loading']);

  return {
    error: getLoadingError(state),
    loaded: isLoaded(state),
    loading: isLoading(state),
  };
};
