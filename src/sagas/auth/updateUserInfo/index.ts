import { takeLatest, call, put } from 'redux-saga/effects';

import {
  UPDATE_USER_INFO_REQUEST,
  updateUserInfoSuccess,
  updateUserInfoFailure,
} from 'store';
import { ApiClient } from 'types';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* updateUserInfo(client: ApiClient) {
  yield takeLatest(UPDATE_USER_INFO_REQUEST, workerSaga, client);
}

// TODO fix when connecting backend with frontend and moving store to typesafe-actions
const updateUserInfoRequest = (client: ApiClient, data: any) =>
  client.put('/users', { data: { ...data.payload } });

// TODO fix when connecting backend with frontend and moving store to typesafe-actions
export function* workerSaga(client: ApiClient, data: any) {
  try {
    const user = yield call(updateUserInfoRequest, client, data);
    yield put(updateUserInfoSuccess(user));
  } catch (error) {
    yield put(updateUserInfoFailure(error));
  }
}
