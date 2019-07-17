import { takeLatest, call, put } from 'redux-saga/effects';
import { apiClient } from '../../../../services';
import { UPDATE_USER_PASSWORD_REQUEST } from '../../../../store/modules/client/changePassword';
import {
  changePasswordSuccess,
  changePasswordFailure,
} from '../../../../store/modules/client/changePassword';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function*() {
  yield takeLatest(UPDATE_USER_PASSWORD_REQUEST, workerSaga);
}

const changePasswordRequest = () => apiClient.post();

function* workerSaga() {
  try {
    const changePasswordResponse = yield call(changePasswordRequest);
    yield put(changePasswordSuccess(changePasswordResponse));
  } catch (error) {
    yield put(changePasswordFailure(error));
  }
}
