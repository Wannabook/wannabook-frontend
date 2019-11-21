import { call, put, takeEvery } from 'redux-saga/effects';

import { LOAD_USER_REQUEST, loadUserFailure, loadUserSuccess } from 'store';
import { ACCESS_TOKEN, API_ENDPOINTS } from 'consts';

export function* loadUserSaga(client) {
  yield takeEvery(LOAD_USER_REQUEST, loadUser, client);
}

export function* loadUser(client) {
  try {
    const { data } = yield call(fetchUser, client);

    // Access token might have been refreshed so we need to set it for client to pick up
    const { accessToken, user } = data;

    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
    }

    yield put(loadUserSuccess({ user, accessToken }));
  } catch (error) {
    /*
    TODO: Dispatch a universal action that will show
     some universal error message (toast or smth similar)
     */
    yield put(loadUserFailure(error));
  }
}

const fetchUser = client => client.get(API_ENDPOINTS.me);
