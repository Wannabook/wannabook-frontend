import { createSelector } from 'reselect';
import { getUser } from 'store';

export const getUserInfo = createSelector(
  [getUser],
  user => {
    if (!user) return {};

    return user;
  }
);
