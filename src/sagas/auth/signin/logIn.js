import { put, takeLatest } from 'redux-saga/effects';

describe('Change password saga', () => {
  it('should dispatch action "UPDATE_USER_PASSWORD_REQUEST" ', () => {
    const generator = actionWatcher();
    expect(generator.next().value).toEqual(
      takeLatest('UPDATE_USER_PASSWORD_REQUEST', workerSaga)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "UPDATE_USER_PASSWORD_SUCCESS" with result', () => {
    const mockResponse = { body: { status: 'OK' } };
    const generator = workerSaga();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: 'UPDATE_USER_PASSWORD_SUCCESS', payload: mockResponse })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
