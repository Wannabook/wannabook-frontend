import { call, takeLatest } from '@redux-saga/core/effects';
// omg!
import { startGoogleAuth } from '../../../../store/modules/auth/actions';

export function* googleAuthSaga(client) {
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
