import { call, takeLatest } from '@redux-saga/core/effects';
// omg!
import { startGoogleAuth } from '../../../../store/modules/auth/actions';

export function* googleAuthSaga(client) {
  yield takeLatest(startGoogleAuth, handler, client);
}

function* handler(client) {
  try {
    window.location = yield call(
      [client, 'request'],
      // TODO: do not hardcode url here, get it from env
      'http://localhost:5000/users/login/google/auth',
      {
        method: 'POST',
      }
    );
  } catch (error) {
    console.error(error);
  }
}
