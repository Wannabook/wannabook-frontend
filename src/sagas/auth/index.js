import { all, fork } from 'redux-saga/effects';

import { loadUserSaga } from './user';
import { emailLoginSaga } from './signin/email';
import { signUpSaga } from './signup/email';
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';
import { googleAuthSaga } from './signin/google';

const subSagas = [
  loadUserSaga,
  changePassword,
  forgotPassword,
  emailLoginSaga,
  signUpSaga,
  googleAuthSaga,
];

export function* authSaga(client) {
  yield all(subSagas.map(s => fork(s, client)));
}
