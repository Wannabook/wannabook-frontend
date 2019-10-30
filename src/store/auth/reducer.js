import { combineReducers } from 'redux';

import user from './user/reducer';
import changePassword from './changePassword/reducer';
import forgotPassword from './forgotPassword/reducer';

export default combineReducers({
  user,
  changePassword,
  forgotPassword,
});
