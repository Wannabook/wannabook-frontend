import { all, fork } from 'redux-saga/effects';

import auth from './modules/auth';
import organizations from './modules/organizations';
import { loginSaga } from './modules/auth/auth';
import { googleAuthSaga } from './modules/auth/google';

import { apiClient } from '../services';

/**
 * rootSaga
 */
const subSagas = [auth, organizations, loginSaga, googleAuthSaga];

export default function*() {
  yield all(subSagas.map(s => fork(s, apiClient)));
}
