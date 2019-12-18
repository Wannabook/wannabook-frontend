import { call, put, takeEvery } from '@redux-saga/core/effects';

import { AUTH_METHODS, ACCESS_TOKEN, AUTH_METHOD } from 'consts';
import { signUpAction, SignUpRequestPayload } from 'store';
import { ApiClient } from 'types';

export function* signUpSaga(client: ApiClient) {
  yield takeEvery(signUpAction.request, signUp, client);
}

export function* signUp(
  client: ApiClient,
  { payload }: ReturnType<typeof signUpAction.request>
) {
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
      yield put(signUpAction.success({ message: signUpResponse.message }));

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

    yield put(signUpAction.success(signUpResponse));
  } catch (error) {
    yield put(signUpAction.failure(error));
  }
}

const doSignUp = (client: ApiClient, data: SignUpRequestPayload) =>
  client.post('/users/signup', {
    headers: {
      'X-Auth-Method': AUTH_METHODS.LOGIN_PASSWORD,
    },
    data,
  });
