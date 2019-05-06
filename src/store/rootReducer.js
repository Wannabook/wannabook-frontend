import { combineReducers } from 'redux';

import { reducer as organization } from './modules/organizations';

export default combineReducers({
  // 3rd party reducers

  // Application reducers
  organization,
});
