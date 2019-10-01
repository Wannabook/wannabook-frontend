import { all, fork } from 'redux-saga/effects';

import organizations from './modules/organizations';
import { userSaga } from './modules/user';
import clientRoot from './modules/client';
import { authSaga } from '../sagas/modules/auth';
import { apiClient } from '../services';

/**
 * rootSaga
 */
const subSagas = [organizations, userSaga, clientRoot, authSaga];

export default function*() {
  yield all(subSagas.map(s => fork(s, apiClient)));
}
