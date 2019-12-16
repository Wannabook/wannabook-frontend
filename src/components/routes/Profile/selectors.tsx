import { createSelector } from 'reselect';
import { getUser } from 'store';

import { Profile } from 'types';

export const getUserInfo = createSelector([getUser], user => {
  if (user === null) {
    const emptyUser: Profile = {
      firstName: '',
      lastName: '',
      phone: '',
      picture: '',
    };

    return emptyUser;
  }

  return user;
});
