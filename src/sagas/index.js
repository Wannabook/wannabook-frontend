import { all, fork } from 'redux-saga/effects';

import organizations from './modules/organizations';
import user from './modules/user';
import clientRoot from './modules/client';
import { authSaga } from '../sagas/modules/auth';

/**
 * rootSaga
 */
const subSagas = [organizations, user, clientRoot, authSaga];

export default function*() {
  yield all(subSagas.map(s => fork(s)));
}
