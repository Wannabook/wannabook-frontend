import { call, takeLatest } from '@redux-saga/core/effects';

import { startGoogleAuth } from 'store';
import { ApiClient } from 'types';

export function* googleLoginSaga(client: ApiClient) {
  yield takeLatest(startGoogleAuth, handler, client);
}

function* handler(client: ApiClient) {
  const { API_URL, API_VERSION, GOOGLE_AUTH_URL } = process.env;

  try {
    const response = yield call(
      [client, 'post'],
      `${API_URL}/api/v${API_VERSION}/${GOOGLE_AUTH_URL}`
    );

    window.location = response.data;
  } catch (error) {
    console.error(error);
  }
}
