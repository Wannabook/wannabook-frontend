import {
  FORGOT_PASSWORD_REQUEST,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  forgotPassword,
} from 'store';

import { ApiClient, PlainOldJsObject } from 'types';

import { takeLatest, call, put } from 'redux-saga/effects';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*(client: ApiClient) {
  // TODO: fix when we use typesafe-actions
  yield takeLatest(FORGOT_PASSWORD_REQUEST as any, workerSaga, client);
}

// TODO: fix type of data when forgotpassword is handled by Typesafe-actions
const forgotPasswordRequest = (client: ApiClient, data: PlainOldJsObject) =>
  client.post('/users', { data: { ...data.payload } });

// TODO: fix type of data when forgotpassword is handled by Typesafe-actions
export function* workerSaga(client: ApiClient, data: PlainOldJsObject) {
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
