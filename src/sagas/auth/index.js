import { all, spawn } from 'redux-saga/effects';

import { loadUserSaga } from './user';
import { emailLoginSaga } from './signin/email';
import { signUpSaga } from './signup/email';
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';
import { googleLoginSaga } from './signin/google';
import { signOutSaga } from './signout';

const subSagas = [
  loadUserSaga,
  changePassword,
  forgotPassword,
  emailLoginSaga,
  googleLoginSaga,
  signUpSaga,
  signOutSaga,
];

export function* authSaga(client) {
  yield all(subSagas.map(s => spawn(s, client)));
}
