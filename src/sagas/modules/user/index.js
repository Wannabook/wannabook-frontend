import { takeLatest, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../services';
import { LOAD_USER_REQUEST } from '../../../store/modules/user';
import { loadUserSuccess, loadUserFailure } from '../../../store/modules/user';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeLatest(LOAD_USER_REQUEST, workerSaga);
}

const fetchUser = () => apiClient.get('/user/me');

export function* workerSaga() {
  try {
    const user = yield call(fetchUser);
    yield put(loadUserSuccess(user));
  } catch (error) {
    yield put(loadUserFailure(error));
  }
}
