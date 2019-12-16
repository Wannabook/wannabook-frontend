import {
  UPDATE_USER_PASSWORD_REQUEST,
  changePasswordSuccess,
  changePasswordFailure,
} from 'store';
import { ApiClient } from 'types';

import { takeLatest, call, put } from 'redux-saga/effects';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*(client: ApiClient) {
  yield takeLatest(UPDATE_USER_PASSWORD_REQUEST, workerSaga, client);
}

const changePasswordRequest = (client: ApiClient) => client.put('/users');

export function* workerSaga(client: ApiClient) {
  try {
    const changePasswordResponse = yield call(changePasswordRequest, client);
    yield put(changePasswordSuccess(changePasswordResponse));
  } catch (error) {
    yield put(changePasswordFailure(error));
  }
}
