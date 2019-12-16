import { call, put, takeEvery } from '@redux-saga/core/effects';

import { AUTH_METHODS, ACCESS_TOKEN, AUTH_METHOD } from 'consts';
import { logInAction } from 'store';
import { ApiClient } from 'types';

export function* emailLoginSaga(client: ApiClient) {
  yield takeEvery(logInAction.request, logIn, client);
}

export function* logIn(
  client: ApiClient,
  data: ReturnType<typeof logInAction.request>
) {
  try {
    const logInResponse = yield call(logInRequest, client, data);

    if (logInResponse.message) {
      // we got an error during signin
      yield put(logInAction.success({ message: logInResponse.message }));

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

    yield put(logInAction.success(logInResponse));
  } catch (error) {
    // TODO: differentiate between custom-sent errors from our API and JS-specific errors
    console.error('Email sign-in:', error);
    yield put(logInAction.failure(error));
  }
}

const logInRequest = (
  client: ApiClient,
  data: ReturnType<typeof logInAction.request>
) =>
  client.post('/users/login', {
    headers: {
      'X-Auth-Method': AUTH_METHODS.LOGIN_PASSWORD,
    },
    data: { ...data.payload },
  });
