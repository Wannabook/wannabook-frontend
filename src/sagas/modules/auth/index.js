import { all, fork } from 'redux-saga/effects';

import changePassword from './changePassword';
import logIn from './auth';

/**
 * rootSaga
 */
export default function*() {
  yield all([fork(changePassword), fork(logIn)]);
}
