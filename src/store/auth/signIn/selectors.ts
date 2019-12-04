import * as R from 'ramda';

import { EntityInitialState } from 'types';

export const getSignInError = (state: EntityInitialState) =>
  R.pathOr(null, ['auth', 'signIn', 'error'], state);
