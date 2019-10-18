import { call, put, takeEvery } from '@redux-saga/core/effects';
import {
  LOAD_USER,
  loadUserFailure,
  loadUserSuccess,
} from '../../../store/auth/user';
import { API_ENDPOINTS } from '../../../constants';

export function* loadUserSaga(client) {
  yield takeEvery(LOAD_USER, loadUser, client);
}

export function* loadUser(client) {
  try {
    const authToken = yield localStorage.getItem('authToken');
    if (authToken) {
      const fetchUserResponse = yield call(fetchUser, client);
      yield put(loadUserSuccess(fetchUserResponse));
    }
  } catch (error) {
    yield put(loadUserFailure(error));
  }
}

const fetchUser = client =>
  client.get(API_ENDPOINTS.me, {
    headers: {
      'X-Auth-Method': localStorage.getItem('authMethod'),
      'X-Id-Token': localStorage.getItem('idToken'), // for Google auth
    },
  });
