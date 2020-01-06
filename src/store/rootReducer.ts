import { combineReducers } from 'redux';

import { authReducer as auth } from './auth';
import { organizationsReducer as organizations } from './organizations';

export default combineReducers({
  // 3rd party reducers

  // Application reducers
  auth,
  organizations,
});
