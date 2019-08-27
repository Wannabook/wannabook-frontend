import { call, takeLatest } from '@redux-saga/core/effects';
// omg!
import { startGoogleAuth } from '../../../../store/modules/auth/actions';

export function* googleAuthSaga() {
  yield takeLatest(startGoogleAuth, handler);
}

function* handler() {
  try {
    // TODO: should not be hardcoded
    const res = yield call(
      fetch,
      'http://localhost:5000/users/login/google/authUrl',
      {
        method: 'POST',
      }
    );

    window.location = yield res.json();
  } catch (error) {
    console.error(error);
  }
}
