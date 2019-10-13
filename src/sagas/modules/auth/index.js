import { all, fork } from 'redux-saga/effects';

import changePassword from './changePassword';
import logIn from './logIn';

/**
 * rootSaga
 */
export default function*() {
  yield all([fork(changePassword), fork(logIn)]);
}
