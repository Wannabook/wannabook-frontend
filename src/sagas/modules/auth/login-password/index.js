import { call, takeLatest, put } from '@redux-saga/core/effects';
import {
  startLoginPasswordAuth,
  startLoginPasswordSignup,
} from '../../../../store/modules/auth/actions';
import { AUTH_METHODS } from '../../../../constants';
import {
  loadUserFailure,
  loadUserSuccess,
} from '../../../../store/modules/user';

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

export function* loginPasswordSignUpSaga(client) {
  yield takeLatest(startLoginPasswordSignup, function* handler() {
    try {
      const { user, token, error } = yield call(
        [client, 'request'],
        // TODO: do not hardcode url here, get it from env
        'http://localhost:5000/users/signup',
        {
          method: 'POST',
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
