import { call, takeLatest } from '@redux-saga/core/effects';

import { startGoogleAuth } from 'store';

export function* googleLoginSaga(client) {
  yield takeLatest(startGoogleAuth, handler, client);
}

function* handler(client) {
  try {
    const response = yield call(
      [client, 'post'],
      `${process.env.API_URL}/api/v${process.env.API_VERSION}/${
        process.env.GOOGLE_AUTH_URL
      }`
    );

    window.location = response.data;
  } catch (error) {
    console.error(error);
  }
}
