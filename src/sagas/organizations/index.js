import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_ORGANIZATIONS_REQUEST } from '../../store/organizations';
import {
  loadOrganizationsSuccess,
  loadOrganizationsFailure,
} from '../../store/organizations';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* orgSaga(client) {
  yield takeLatest(LOAD_ORGANIZATIONS_REQUEST, workerSaga, client);
}

export function* workerSaga(client) {
  try {
    const organizations = yield call(client.request, '/organizations');
    yield put(loadOrganizationsSuccess(organizations));
  } catch (error) {
    yield put(loadOrganizationsFailure(error));
  }
}
