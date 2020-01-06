import * as R from 'ramda';

import { EntityInitialState } from 'types';

export const getSignUpError = (state: EntityInitialState) =>
  R.pathOr(null, ['auth', 'signUp', 'error'], state);
