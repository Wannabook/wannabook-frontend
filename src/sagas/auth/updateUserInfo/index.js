import { takeLatest, call, put } from 'redux-saga/effects';
import { UPDATE_USER_INFO_REQUEST } from '../../../store/auth/updateUserInfo';
import {
  updateUserInfoSuccess,
  updateUserInfoFailure,
} from '../../../store/auth/updateUserInfo';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* updateUserInfo(client) {
  yield takeLatest(UPDATE_USER_INFO_REQUEST, workerSaga, client);
}

const updateUserInfoRequest = (client, data) =>
  client.put('/users', { body: { ...data.payload } });

export function* workerSaga(client, data) {
  try {
    const user = yield call(updateUserInfoRequest, client, data);
    yield put(updateUserInfoSuccess(user));
  } catch (error) {
    yield put(updateUserInfoFailure(error));
  }
}
