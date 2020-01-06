import { EntityInitialState, EntityLoadFailurePayload } from '../../types';

export const handleLoad = (state: EntityInitialState) => {
  return {
    ...state,
    error: '',
    loading: true,
    loaded: false,
  };
};

export const handleLoadFailure = (
  state: EntityInitialState,
  { payload }: EntityLoadFailurePayload
) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};
