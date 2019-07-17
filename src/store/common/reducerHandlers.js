export const handleLoad = state => {
  return {
    ...state,
    error: '',
    loading: true,
    loaded: false,
  };
};

export const handleLoadFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};
