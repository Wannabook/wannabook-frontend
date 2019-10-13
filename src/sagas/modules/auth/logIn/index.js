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

const logInRequest = data =>
  apiClient.post('/users/login', { body: { ...data.payload } });

export function* workerSaga(data) {
  try {
    const logInResponse = yield call(logInRequest, data);
    console.log('logInResponse', logInResponse);
    const { authToken, expirationDate, userId } = logInResponse;
    yield localStorage.setItem('authToken', authToken);
    yield localStorage.setItem('expirationDate', expirationDate);
    yield localStorage.setItem('userId', userId);
    yield put(logInRequestSuccess(logInResponse));
  } catch (error) {
    yield put(logInRequestFailure(error));
  }
}
