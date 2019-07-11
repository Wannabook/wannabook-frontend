import * as R from 'ramda';

export const getLoadingProps = (entity, field) => state => {
  const getLoadingError = R.pathOr('', [entity, field, 'error']);
  const isLoaded = R.pathOr(false, [entity, field, 'loaded']);
  const isLoading = R.pathOr(false, [entity, field, 'loading']);

  return {
    error: getLoadingError(state),
    loaded: isLoaded(state),
    loading: isLoading(state),
  };
};
