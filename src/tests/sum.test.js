import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
//expect(nextState).to.deep.equal
const obj1 = { name: 'bob', age: 20 };
const obj2 = { name: 'bob', age: 20 };

test('obj1 equal obj2', () => {
  expect(obj1).toEqual(obj2);
});

describe('mock-tests', () => {
  it('obj1 equal obj2', () => {
    expect(obj1).toEqual(obj2);
  });
});
