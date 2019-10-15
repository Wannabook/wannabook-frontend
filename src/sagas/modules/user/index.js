import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_USER_REQUEST } from '../../../store/modules/user';
import { loadUserSuccess, loadUserFailure } from '../../../store/modules/user';
import { API_ENDPOINTS } from '../../../constants';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* userSaga(client) {
  yield takeLatest(LOAD_USER_REQUEST, workerSaga, client);
}

export function* workerSaga(client) {
  try {
    const user = yield call([client, 'get'], API_ENDPOINTS.me, {
      headers: {
        'X-Auth-Method': localStorage.getItem('authMethod'),
        'X-Id-Token': localStorage.getItem('idToken'), // for Google auth
      },
    });

    console.log('user', user);

    yield put(loadUserSuccess(user));
  } catch (error) {
    console.error('error', error);
    yield put(loadUserFailure(error));
  }
}
