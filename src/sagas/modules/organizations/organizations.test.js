import { put, takeLatest } from 'redux-saga/effects';
import actionWatcher, { workerSaga } from './index';

describe('Load organizations saga', () => {
  it('should dispatch action "LOAD_ORGANIZATIONS_REQUEST" ', () => {
    const generator = actionWatcher();
    expect(generator.next().value).toEqual(
      takeLatest('LOAD_ORGANIZATIONS_REQUEST', workerSaga)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "LOAD_ORGANIZATIONS_SUCCESS" with result', () => {
    const mockResponse = [
      {
        id: 1,
        name: 'Google',
        description: 'Google description',
      },
      {
        id: 2,
        name: 'Facebook',
        description: 'Facebook description',
      },
    ];
    const generator = workerSaga();
    generator.next();
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: 'LOAD_ORGANIZATIONS_SUCCESS', payload: mockResponse })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
