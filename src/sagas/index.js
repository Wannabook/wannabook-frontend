import { all, fork } from 'redux-saga/effects';

import organizations from './modules/organizations';
import user from './modules/user';
import clientRoot from './modules/client';

/**
 * rootSaga
 */
export default function*() {
  yield all([fork(organizations), fork(user), fork(clientRoot)]);
}
