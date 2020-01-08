import { takeEvery, call } from '@redux-saga/core/effects';

import { signOut } from 'store';
import { unauthorized } from 'services';
import { API_ENDPOINTS } from 'consts';
import { ApiClient } from 'types';

export function* signOutSaga(client: ApiClient) {
  yield takeEvery(signOut, handler, client);
}

function* handler(client: ApiClient) {
  try {
    yield call(client.post, API_ENDPOINTS.signout);
  } catch (error) {
    // TODO: show something useful on UI in this case
    console.error(error);
  } finally {
    unauthorized();
  }
}
