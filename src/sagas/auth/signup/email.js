import { call, put, takeEvery } from '@redux-saga/core/effects';

import { AUTH_METHODS, ACCESS_TOKEN, AUTH_METHOD } from 'consts';
import {
  signUpRequestFailure,
  signUpRequestSuccess,
  USER_SIGN_UP_REQUEST,
} from 'store';

export function* signUpSaga(client) {
  yield takeEvery(USER_SIGN_UP_REQUEST, signUp, client);
}

export function* signUp(client, { payload }) {
  const { email, name, password, phone } = payload;

  try {
    const signUpResponse = yield call(doSignUp, client, {
      // just to be explicit about what we send to backend
      email,
      name,
      password,
      phone,
    });

    if (signUpResponse.message) {
      // request completed, but we got error message
      yield put(signUpRequestSuccess({ message: signUpResponse.message }));

      return;
    }

    const {
      data: { token, authMethod },
    } = signUpResponse;

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
    }

    if (authMethod) {
      localStorage.setItem(AUTH_METHOD, authMethod);
    }

    yield put(signUpRequestSuccess(signUpResponse));
  } catch (error) {
    yield put(signUpRequestFailure(error));
  }
}

const doSignUp = (client, data) =>
  client.post('/users/signup', {
    headers: {
      'X-Auth-Method': AUTH_METHODS.LOGIN_PASSWORD,
    },
    data,
  });
