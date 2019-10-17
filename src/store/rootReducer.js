import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as organizations } from './organizations';

export default combineReducers({
  // 3rd party reducers

  // Application reducers
  auth,
  organizations,
});
