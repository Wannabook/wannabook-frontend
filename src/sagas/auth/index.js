import { all, spawn } from 'redux-saga/effects';

import { loadUserSaga } from './user';
import { emailLoginSaga } from './signin/email';
import { signUpSaga } from './signup/email';
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';
import { googleLoginSaga } from './signin/google';
import { signOutSaga } from './signout';
import { updateUserInfo } from './updateUserInfo';

const subSagas = [
  loadUserSaga,
  changePassword,
  forgotPassword,
  emailLoginSaga,
  googleLoginSaga,
  signUpSaga,
  signOutSaga,
  updateUserInfo,
];

export function* authSaga(client) {
  yield all(subSagas.map(s => spawn(s, client)));
}
