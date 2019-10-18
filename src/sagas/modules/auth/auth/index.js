import { takeEvery, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../../services';
import {
  USER_LOGIN_REQUEST,
  USER_SIGN_UP_REQUEST,
  LOAD_USER,
} from '../../../../store/modules/auth/auth';
import {
  logInRequestSuccess,
  logInRequestFailure,
  signUpRequestSuccess,
  signUpRequestFailure,
} from '../../../../store/modules/auth/auth';
import {
  loadUserFailure,
  loadUserSuccess,
} from '../../../../store/modules/auth/auth';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeEvery(USER_LOGIN_REQUEST, logIn);
  yield takeEvery(USER_SIGN_UP_REQUEST, signUp);
  yield takeEvery(LOAD_USER, loadUser);
}

const logInRequest = data =>
  apiClient.post('/users/login', { body: { ...data.payload } });

const signUpRequest = data =>
  apiClient.post('/users', { body: { ...data.payload } });

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

export function* signUp(data) {
  try {
    const signUpResponse = yield call(signUpRequest, data);
    const { authToken } = signUpResponse;
    yield localStorage.setItem('authToken', authToken);
    yield put(signUpRequestSuccess(signUpResponse));
  } catch (error) {
    yield put(signUpRequestFailure(error));
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