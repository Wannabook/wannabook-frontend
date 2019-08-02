import { takeLatest, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../services';
import { LOAD_ORGANIZATIONS_REQUEST } from '../../../store/modules/organizations';
import {
  loadOrganizationsSuccess,
  loadOrganizationsFailure,
} from '../../../store/modules/organizations';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeLatest(LOAD_ORGANIZATIONS_REQUEST, workerSaga);
}

const fetchOrganizations = () => apiClient.get('/organizations');

export function* workerSaga() {
  try {
    const organizations = yield call(fetchOrganizations);
    yield put(loadOrganizationsSuccess(organizations));
  } catch (error) {
    yield put(loadOrganizationsFailure(error));
  }
}
