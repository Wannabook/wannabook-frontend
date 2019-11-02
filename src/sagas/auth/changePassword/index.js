import { takeLatest, call, put } from 'redux-saga/effects';

import {
  UPDATE_USER_PASSWORD_REQUEST,
  changePasswordSuccess,
  changePasswordFailure,
} from 'store';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*(client) {
  yield takeLatest(UPDATE_USER_PASSWORD_REQUEST, workerSaga, client);
}

const changePasswordRequest = client => client.put('/users');

export function* workerSaga(client) {
  try {
    const changePasswordResponse = yield call(changePasswordRequest, client);
    yield put(changePasswordSuccess(changePasswordResponse));
  } catch (error) {
    yield put(changePasswordFailure(error));
  }
}
