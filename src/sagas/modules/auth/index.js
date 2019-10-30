import { all, fork } from 'redux-saga/effects';

import logIn from './auth';
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';
import updateUserInfo from './updateUserInfo';

/**
 * rootSaga
 */
export default function*() {
  yield all([
    fork(logIn),
    fork(changePassword),
    fork(forgotPassword),
    fork(updateUserInfo),
  ]);
}
