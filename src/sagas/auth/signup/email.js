import { call, takeLatest, put, takeEvery } from '@redux-saga/core/effects';

import { AUTH_METHODS } from '../../../constants';
import {
  startLoginPasswordAuth,
  startLoginPasswordSignup,
} from '../../../store/auth/actions';
import { loadUserFailure, loadUserSuccess } from '../../../store/auth/auth';
import { apiClient } from '../../../services';
import {
  signUpRequestFailure,
  signUpRequestSuccess,
  USER_SIGN_UP_REQUEST,
} from '../../../store/auth/auth';

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
    const { authToken } = signUpResponse;
    yield localStorage.setItem('authToken', authToken);
    yield put(signUpRequestSuccess(signUpResponse));
  } catch (error) {
    yield put(signUpRequestFailure(error));
  }
}

const signUpRequest = data =>
  apiClient.post('/users', { body: { ...data.payload } });
