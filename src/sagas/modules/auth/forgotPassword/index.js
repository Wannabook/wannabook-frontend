import { takeLatest, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../../services';
import { FORGOT_PASSWORD_REQUEST } from '../../../../store/modules/auth/forgotPassword';
import {
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from '../../../../store/modules/auth/forgotPassword';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, workerSaga);
}

const forgotPasswordRequest = data => {
  return apiClient.post('/users', { body: { ...data.payload } });
};

export function* workerSaga() {
  try {
    const forgotPasswordResponse = yield call(forgotPasswordRequest);
    yield put(forgotPasswordSuccess(forgotPasswordResponse));
  } catch (error) {
    yield put(forgotPasswordFailure(error));
  }
}
