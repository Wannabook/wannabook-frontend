import { call, takeLatest } from '@redux-saga/core/effects';
// omg!
import { startGoogleAuth } from '../../../../store/modules/auth/actions';
import { AUTH_TYPE } from '../../../../constants';

export function* googleAuthSaga(client) {
  yield takeLatest(startGoogleAuth, handler, client);
}

function* handler(client) {
  try {
    const res = yield call(client.request, [
      'http://localhost:5000/users/login/google/authUrl',
      {
        method: 'POST',
        headers: {
          'X-Auth-Method': AUTH_TYPE.GOOGLE,
        },
      },
    ]);

    window.location = yield res.json();
  } catch (error) {
    console.error(error);
  }
}
