import {
  INITIAL_STATE,
  LOAD_ORGANIZATIONS,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
} from './constants';

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case LOAD_ORGANIZATIONS:
      return handleLoadOrganizations(state);

    case LOAD_ORGANIZATIONS_SUCCESS:
      return handleLoadOrganizationsSuccess(state, action);

    case LOAD_ORGANIZATIONS_FAILURE:
      return handleLoadOrganizationsFailure(state, action);

    default:
      return state;
  }
}

const handleLoadOrganizations = state => {
  return {
    ...state,
    loading: true,
  };
};

const handleLoadOrganizationsSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    records: [...payload],
  };
};

const handleLoadOrganizationsFailure = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  };
};
