import { takeEvery, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../../services';
import {
  USER_LOGIN_REQUEST,
  LOAD_USER,
} from '../../../../store/modules/auth/logIn';
import {
  logInRequestSuccess,
  logInRequestFailure,
} from '../../../../store/modules/auth/logIn';
import {
  loadUserFailure,
  loadUserSuccess,
} from '../../../../store/modules/auth/logIn';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeEvery(USER_LOGIN_REQUEST, logIn);
  yield takeEvery(LOAD_USER, loadUser);
}

const logInRequest = data =>
  apiClient.post('/users/login', { body: { ...data.payload } });

const fetchUser = () => apiClient.get('/users/me');

export function* logIn(data) {
  try {
    const logInResponse = yield call(logInRequest, data);
    const { authToken } = logInResponse;
    yield localStorage.setItem('authToken', authToken);
    yield put(logInRequestSuccess(logInResponse));
  } catch (error) {
    yield put(logInRequestFailure(error));
  }
}

export function* loadUser() {
  try {
    const authToken = yield localStorage.getItem('authToken');
    if (authToken) {
      const fetchUserResponse = yield call(fetchUser);
      yield put(loadUserSuccess(fetchUserResponse));
    }
  } catch (error) {
    yield put(loadUserFailure(error));
  }
}
