import R from 'ramda';

export const sum = (a: number, b: number) => {
  return a + b;
};

export const greeting = (name: string) => {
  return R.join(' ', ['Hello,', name]);
};
