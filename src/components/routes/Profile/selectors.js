import { createSelector } from 'reselect';
import { getUser } from '../../../store/modules/auth/auth';

export const getUserInfo = createSelector(
  [getUser],
  user => {
    if (!user) return {};

    return user;
  }
);
