import { INITIAL_STATE, LOAD_ORGANIZATIONS_SUCCESS } from './constants';

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (action.type === LOAD_ORGANIZATIONS_SUCCESS) {
    return handleLoadOrganizationsSuccess(state, action);
  }
}

const handleLoadOrganizationsSuccess = (state, { payload }) => {
  return {
    ...state,
    records: [...payload],
  };
};
