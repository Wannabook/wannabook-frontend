import {
  LOAD_USER_REQUEST,
  loadUserFailure,
  loadUserRequest,
  loadUserSuccess,
  loadUserUnauthorized,
} from 'store';
import { ACCESS_TOKEN, API_ENDPOINTS } from 'consts';

import { call, put, takeEvery } from 'redux-saga/effects';

export function* loadUserSaga(client) {
  yield takeEvery(LOAD_USER_REQUEST, loadUser, client);
}

export function* loadUser(client) {
  try {
    const res = yield call(fetchUser, client);

    if (res?.message) {
      // we got an error, but we don't need it in store
      yield put(loadUserUnauthorized());

      return;
    }

    // Access token might have been refreshed so we need to set it for client to pick up
    if (res?.data?.accessToken) {
      localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
    }

    if (res?.data?.user) {
      yield put(
        loadUserSuccess({
          user: res?.data?.user,
          accessToken: res?.data?.accessToken,
        })
      );
    }
  } catch (error) {
    /*
    TODO: Dispatch a universal action that will show
     some universal error message (toast or smth similar)
     */
    yield put(loadUserFailure(error));
  }
}

const fetchUser = client => client.get(API_ENDPOINTS.me);
