import { call, takeLatest, put, takeEvery } from '@redux-saga/core/effects';

import { AUTH_METHODS } from 'consts';
import {
  startLoginPasswordSignup,
  loadUserFailure,
  loadUserSuccess,
  signUpRequestFailure,
  signUpRequestSuccess,
  USER_SIGN_UP_REQUEST,
} from 'store';
import { apiClient } from 'services';

export function* loginPasswordSignUpSaga(client) {
  yield takeLatest(startLoginPasswordSignup, function* handler() {
    try {
      const { user, token, error } = yield call(
        [client, 'post'],
        // TODO: do not hardcode url here, get it from env
        'http://localhost:5000/users/signup',
        {
          body: {
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

export function* signUp(data) {
  try {
    const signUpResponse = yield call(signUpRequest, data);
    const { token, user } = signUpResponse;
    yield localStorage.setItem('idToken', token);
    // TODO: yield put(setUser(user))?
    yield put(signUpRequestSuccess(signUpResponse));
    // TODO: redirect to front page?
  } catch (error) {
    yield put(signUpRequestFailure(error));
  }
}

const signUpRequest = data =>
  apiClient.post('/users', { body: { ...data.payload } });