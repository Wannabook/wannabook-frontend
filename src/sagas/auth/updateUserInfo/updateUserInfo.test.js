import { put, takeLatest } from 'redux-saga/effects';
import actionWatcher, { workerSaga } from './index';

describe('Update user info saga', () => {
  it('should dispatch action "UPDATE_USER_INFO_REQUEST" ', () => {
    const generator = actionWatcher();
    expect(generator.next().value).toEqual(
      takeLatest('UPDATE_USER_INFO_REQUEST', workerSaga)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "UPDATE_USER_INFO_SUCCESS" with result', () => {
    const mockResponse = { body: { status: 'OK' } };
    const generator = workerSaga();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: 'UPDATE_USER_INFO_SUCCESS', payload: mockResponse })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
