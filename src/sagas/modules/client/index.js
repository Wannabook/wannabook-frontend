import { all, fork } from 'redux-saga/effects';

import changePassword from './changePassword';

/**
 * rootSaga
 */
export default function*(client) {
  yield all(fork(changePassword, client));
}
