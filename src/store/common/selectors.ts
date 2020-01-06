import * as R from 'ramda';

import { EntityInitialState } from '../../types';

export const getLoadingProps = (...args: any[]) => (
  state: EntityInitialState
) => {
  const getLoadingError = R.pathOr('', [...args, 'error']);
  const isLoaded = R.pathOr(false, [...args, 'loaded']);
  const isLoading = R.pathOr(false, [...args, 'loading']);

  return {
    error: getLoadingError(state),
    loaded: isLoaded(state),
    loading: isLoading(state),
  };
};
