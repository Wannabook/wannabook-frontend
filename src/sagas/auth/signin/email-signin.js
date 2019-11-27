import { call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';

import { AUTH_METHODS, ACCESS_TOKEN, AUTH_METHOD } from 'consts';
import {
  loadUserFailure,
  loadUserSuccess,
  logInRequestFailure,
  logInRequestSuccess,
  USER_LOGIN_REQUEST,
  startLoginPasswordAuth,
} from 'store';

export function* emailLoginSaga(client) {
  yield takeEvery(USER_LOGIN_REQUEST, logIn, client);
}

export function* logIn(client, data) {
  try {
    const logInResponse = yield call(logInRequest, client, data);

    if (logInResponse.message) {
      // we got an error during signin
      yield put(logInRequestSuccess({ message: logInResponse.message }));

      return;
    }

    const {
      data: { token, authMethod },
    } = logInResponse;

    if (token) {
      yield localStorage.setItem(ACCESS_TOKEN, token);
    }

    if (authMethod) {
      yield localStorage.setItem(AUTH_METHOD, authMethod);
    }

    yield put(logInRequestSuccess(logInResponse));
  } catch (error) {
    yield put(logInRequestFailure(error));
  }
}

const logInRequest = (client, data) =>
  client.post('/users/login', {
    headers: {
      'X-Auth-Method': AUTH_METHODS.LOGIN_PASSWORD,
    },
    data: { ...data.payload },
  });
