import { all, spawn } from 'redux-saga/effects';

import { authSaga } from './auth';
import { orgSaga } from './organizations';

import { apiClient } from '../services';

/**
 * rootSaga
 */
const subSagas = [authSaga, orgSaga];

export default function*() {
  yield all(subSagas.map((saga: any) => spawn(saga, apiClient)));
}
