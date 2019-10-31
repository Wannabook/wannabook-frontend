import { combineReducers } from 'redux';

import user from './user/reducer';
import changePassword from './changePassword/reducer';
import forgotPassword from './forgotPassword/reducer';
import updateUserInfo from './updateUserInfo/reducer';

export default combineReducers({
  user,
  changePassword,
  forgotPassword,
  updateUserInfo,
});
