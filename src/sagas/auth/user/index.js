import { call, put, takeEvery } from 'redux-saga/effects';

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
    const fetchUserResponse = yield call(fetchUser, client);

    yield put(loadUserSuccess(fetchUserResponse));
  } catch (error) {
    /*
    TODO: Dispatch a universal action that will show
     some universal error message (toast or smth similar)
     */
    yield put(loadUserFailure(error));
  }
}

const fetchUser = client => client.get(API_ENDPOINTS.me);
