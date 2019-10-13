import { all, fork } from 'redux-saga/effects';

import { googleAuthSaga } from './google';
import {
  loginPasswordLoginSaga,
  loginPasswordSignUpSaga,
} from './login-password';

const subSagas = [
  googleAuthSaga,
  loginPasswordLoginSaga,
  loginPasswordSignUpSaga,
];

export function* authSaga(client) {
  yield all(subSagas.map(s => fork(s, client)));
}
