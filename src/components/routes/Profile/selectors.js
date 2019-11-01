import { createSelector } from 'reselect';
import { getUser } from '../../../store/auth/user';

export const getUserInfo = createSelector(
  [getUser],
  user => {
    if (!user) return {};

    return user;
  }
);
