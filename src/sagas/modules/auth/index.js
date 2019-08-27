import { all, fork } from 'redux-saga/effects';
import { googleAuthSaga } from './google';

const subSagas = [googleAuthSaga];

export function* authSaga() {
  yield all(subSagas.map(s => fork(s)));
}
