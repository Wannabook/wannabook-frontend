import { takeLatest, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../../services';
import { UPDATE_USER_INFO_REQUEST } from '../../../../store/modules/auth/updateUserInfo';
import {
  updateUserInfoSuccess,
  updateUserInfoFailure,
} from '../../../../store/modules/auth/updateUserInfo';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeLatest(UPDATE_USER_INFO_REQUEST, workerSaga);
}

const updateUserInfoRequest = data =>
  apiClient.put('/users', { body: { ...data.payload } });

export function* workerSaga(data) {
  try {
    const user = yield call(updateUserInfoRequest, data);
    yield put(updateUserInfoSuccess(user));
  } catch (error) {
    yield put(updateUserInfoFailure(error));
  }
}
