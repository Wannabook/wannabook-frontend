import { combineReducers } from 'redux';

import { reducer as organization } from './modules/organizations';
import { reducer as user } from './modules/user';

export default combineReducers({
  // 3rd party reducers

  // Application reducers
  organization,
  user,
});
