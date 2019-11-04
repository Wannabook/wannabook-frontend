import { createAction } from 'redux-actions';

import {
  LOAD_ORGANIZATIONS_REQUEST,
  LOAD_ORGANIZATIONS_SUCCESS,
  LOAD_ORGANIZATIONS_FAILURE,
} from './constants';

export const loadOrganizations = createAction(LOAD_ORGANIZATIONS_REQUEST);
export const loadOrganizationsSuccess = createAction(
  LOAD_ORGANIZATIONS_SUCCESS
);
export const loadOrganizationsFailure = createAction(
  LOAD_ORGANIZATIONS_FAILURE
);
