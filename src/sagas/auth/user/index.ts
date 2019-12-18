import { call, put, takeEvery } from 'redux-saga/effects';

import { loadUserAction, loadUserUnauthorized } from 'store';
import { ACCESS_TOKEN, API_ENDPOINTS } from 'consts';

import { ApiClient } from 'types';

export function* loadUserSaga(client: ApiClient) {
  yield takeEvery(loadUserAction.request, loadUser, client);
}

export function* loadUser(client: ApiClient) {
  try {
    const res = yield call(fetchUser, client);

    // TODO: rename to errorMessage?
    if (res?.message) {
      // we know we got an error, but we don't need it in store
      yield put(loadUserUnauthorized());

      return;
    }

    // Access token might have been refreshed so we need to set it for client to pick up
    if (res?.data?.accessToken) {
      localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
    }

    if (res?.data?.user) {
      yield put(
        loadUserAction.success({
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
    yield put(loadUserAction.failure(error));
  }
}

const fetchUser = (client: ApiClient) => client.get(API_ENDPOINTS.me);
