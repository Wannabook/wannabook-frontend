import { takeLatest, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../../services';
import { USER_LOGIN_REQUEST } from '../../../../store/modules/auth/logIn';
import {
  logInRequestSuccess,
  logInRequestFailure,
} from '../../../../store/modules/auth/logIn';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeLatest(USER_LOGIN_REQUEST, workerSaga);
}

const changePasswordRequest = data =>
  apiClient.post('/users/login', { body: { ...data.payload } });

export function* workerSaga(data) {
  try {
    const loginUserResponse = yield call(changePasswordRequest, data);
    yield put(logInRequestSuccess(loginUserResponse));
  } catch (error) {
    yield put(logInRequestFailure(error));
  }
}
