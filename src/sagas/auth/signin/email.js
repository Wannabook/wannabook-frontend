import { call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';

import { startLoginPasswordAuth } from '../../../store/auth/actions';
import { AUTH_METHODS } from '../../../constants';
import {
  loadUserFailure,
  loadUserSuccess,
  logInRequestFailure,
  logInRequestSuccess,
  USER_LOGIN_REQUEST,
} from '../../../store/auth/user';

export function* loginPasswordLoginSaga(client) {
  yield takeLatest(startLoginPasswordAuth, function* handler() {
    try {
      const { user, token, error } = yield call(
        [client, 'request'],
        // TODO: do not hardcode url here, get it from env
        'http://localhost:5000/users/login',
        {
          method: 'POST',
        }
      );

      if (error) {
        console.error(error);
        // TODO handle it on ui somehow
      }

      yield put(loadUserSuccess(user));

      if (token) {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('authMethod', AUTH_METHODS.LOGIN_PASSWORD);
      }
    } catch (error) {
      console.error(error);
      yield put(loadUserFailure(error));
    }
  });
}

export function* emailLoginSaga(client) {
  yield takeEvery(USER_LOGIN_REQUEST, logIn, client);
}

export function* logIn(client, data) {
  try {
    const logInResponse = yield call(logInRequest, client, data);
    const { authToken } = logInResponse;
    yield localStorage.setItem('authToken', authToken);
    yield put(logInRequestSuccess(logInResponse));
  } catch (error) {
    yield put(logInRequestFailure(error));
  }
}

const logInRequest = (client, data) =>
  client.post('/users/login', { body: { ...data.payload } });
