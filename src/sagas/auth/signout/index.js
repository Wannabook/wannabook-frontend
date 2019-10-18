import { takeEvery, call } from '@redux-saga/core/effects';
import { signOut } from '../../../store/auth/user';
import { API_ENDPOINTS } from '../../../constants';

export function* signOutSaga(client) {
  yield takeEvery(signOut, handler, client);
}

function* handler(client) {
  try {
    yield call(client.post(API_ENDPOINTS.signout));

    localStorage.removeItem('accessToken');
    localStorage.removeItem('authMethod');
    localStorage.removeItem('idToken');
  } catch (error) {
    // TODO: show something useful on UI in this case
    console.error(error);
  }
}
