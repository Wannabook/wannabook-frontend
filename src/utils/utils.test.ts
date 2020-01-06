import { sum, greeting } from './utils';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('returns greeting', () => {
  expect(greeting('Dima')).toBe('Hello, Dima');
});
