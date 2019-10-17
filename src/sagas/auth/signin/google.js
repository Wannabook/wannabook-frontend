import { call, takeLatest } from '@redux-saga/core/effects';

import { startGoogleAuth } from '../../../store/auth/actions';

export function* googleLoginSaga(client) {
  yield takeLatest(startGoogleAuth, handler, client);
}

function* handler(client) {
  try {
    const response = yield call(
      [client, 'post'],
      // TODO: do not hardcode url here, get it from env
      'http://localhost:5000/users/login/google/auth'
    );

    window.location = response.data;
  } catch (error) {
    console.error(error);
  }
}
