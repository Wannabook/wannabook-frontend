import { call, takeLatest } from '@redux-saga/core/effects';

import { startGoogleAuth } from 'store';
import { ApiClient } from 'types';

export function* googleLoginSaga(client: ApiClient) {
  yield takeLatest(startGoogleAuth, handler, client);
}

function* handler(client: ApiClient) {
  try {
    const response = yield call(
      [client, 'post'],
      // destructuring on process.env doesn't work
      // eslint-disable-next-line max-len
      `${process.env.API_URL}/api/v${process.env.API_VERSION}/${process.env.GOOGLE_AUTH_URL}`
    );

    window.location = response.data;
  } catch (error) {
    console.error(error);
  }
}
