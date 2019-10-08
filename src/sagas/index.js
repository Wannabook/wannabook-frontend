import { all, fork } from 'redux-saga/effects';

import auth from './modules/auth';
import organizations from './modules/organizations';
import user from './modules/user';

/**
 * rootSaga
 */
export default function*() {
  yield all([fork(auth), fork(organizations), fork(user)]);
}
