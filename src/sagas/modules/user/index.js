import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_USER_REQUEST } from '../../../store/modules/user';
import { loadUserSuccess, loadUserFailure } from '../../../store/modules/user';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* userSaga(client) {
  yield takeLatest(LOAD_USER_REQUEST, workerSaga, client);
}

export function* workerSaga(client) {
  console.log('client', client);
  try {
    const user = yield call(() => client.me());

    console.log('user', user);

    yield put(loadUserSuccess(user));
  } catch (error) {
    console.error('error', error);
    yield put(loadUserFailure(error));
  }
}
