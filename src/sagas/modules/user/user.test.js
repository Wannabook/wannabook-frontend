import { put, takeLatest } from 'redux-saga/effects';
import actionWatcher, { workerSaga } from './index';

describe('Load user saga', () => {
  it('should dispatch action "LOAD_USER_REQUEST" ', () => {
    const generator = actionWatcher();
    expect(generator.next().value).toEqual(
      takeLatest('LOAD_USER_REQUEST', workerSaga)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "LOAD_USER_SUCCESS" with result', () => {
    const mockResponse = [
      {
        _id: '5cc744d8cbb72b00179ce09f',
        name: 'Bob',
        email: 'Bob@gmail.com',
        token: 'UG8Gqm64Rdc-3BuE6Eg3n2YimoZGWZsp-ht6fL9bAVc',
      },
    ];
    const generator = workerSaga();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: 'LOAD_USER_SUCCESS', payload: mockResponse })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
