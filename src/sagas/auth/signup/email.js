import { call, takeLatest, put, takeEvery } from '@redux-saga/core/effects';

import { AUTH_METHODS, ACCESS_TOKEN, AUTH_METHOD } from 'consts';
import {
  startLoginPasswordSignup,
  loadUserFailure,
  loadUserSuccess,
  signUpRequestFailure,
  signUpRequestSuccess,
  USER_SIGN_UP_REQUEST,
} from 'store';

export function* loginPasswordSignUpSaga(client) {
  yield takeLatest(startLoginPasswordSignup, function* handler() {
    try {
      const { user, token, error } = yield call(
        [client, 'post'],
        // TODO: do not hardcode url here, get it from env
        'http://localhost:5000/users/signup',
        {
          data: {
            login,
            password,
          },
        }
      );

      if (error) {
        console.error(error);
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
    // TODO: redirect to front page?
    // window.location.href = '/';
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
