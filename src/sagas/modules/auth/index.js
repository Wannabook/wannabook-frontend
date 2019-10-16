import { all, fork } from 'redux-saga/effects';

import { loginSaga } from './auth';
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';

/**
 * rootSaga
 */
export default function*() {
  yield all([fork(loginSaga), fork(changePassword), fork(forgotPassword)]);
}
