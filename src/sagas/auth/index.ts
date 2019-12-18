import { all, spawn } from 'redux-saga/effects';

import { ApiClient } from 'types';

import { loadUserSaga } from './user';
import { emailLoginSaga } from './signin/email-signin';
import { signUpSaga } from './signup/email';
import changePassword from './changePassword';
import forgotPassword from './forgotPassword';
import { googleLoginSaga } from './signin/google-signin';
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

export function* authSaga(client: ApiClient) {
  yield all(subSagas.map(s => spawn(s, client)));
}
