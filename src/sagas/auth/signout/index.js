import { takeEvery, call } from '@redux-saga/core/effects';

import { signOut } from 'store';
import { unauthorized } from 'services';
import { API_ENDPOINTS } from 'consts';

export function* signOutSaga(client) {
  yield takeEvery(signOut, handler, client);
}

function* handler(client) {
  try {
    // TODO: fix signout, some error is showing
    yield call(client.post(API_ENDPOINTS.signout));
  } catch (error) {
    // TODO: show something useful on UI in this case
    console.error(error);
  } finally {
    unauthorized();
  }
}
