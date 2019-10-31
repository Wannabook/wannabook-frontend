import { takeEvery, call } from '@redux-saga/core/effects';

import { signOut } from '../../../store/auth/user';
import { API_ENDPOINTS } from '../../../constants';
import { unauthorized } from '../../../services/authService';

export function* signOutSaga(client) {
  yield takeEvery(signOut, handler, client);
}

function* handler(client) {
  try {
    yield call(client.post(API_ENDPOINTS.signout));
  } catch (error) {
    // TODO: show something useful on UI in this case
    console.error(error);
  } finally {
    unauthorized();
  }
}
