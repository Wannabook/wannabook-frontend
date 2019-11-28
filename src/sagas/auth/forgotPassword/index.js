import {
  FORGOT_PASSWORD_REQUEST,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from 'store';

import { takeLatest, call, put } from 'redux-saga/effects';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*(client) {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, workerSaga, client);
}

const forgotPasswordRequest = (client, data) =>
  client.post('/users', { data: { ...data.payload } });

export function* workerSaga(client, data) {
  try {
    const forgotPasswordResponse = yield call(
      forgotPasswordRequest,
      client,
      data
    );
    yield put(forgotPasswordSuccess(forgotPasswordResponse));
  } catch (error) {
    yield put(forgotPasswordFailure(error));
  }
}
