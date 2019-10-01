import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_ORGANIZATIONS_REQUEST } from '../../../store/modules/organizations';
import {
  loadOrganizationsSuccess,
  loadOrganizationsFailure,
} from '../../../store/modules/organizations';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*(client) {
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
