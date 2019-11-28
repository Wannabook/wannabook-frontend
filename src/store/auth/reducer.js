import { combineReducers } from 'redux';

import user from './user/reducer';
import changePassword from './changePassword/reducer';
import forgotPassword from './forgotPassword/reducer';
import updateUserInfo from './updateUserInfo/reducer';
import signUp from './signUp/reducer';
import signIn from './signIn/reducer';

export default combineReducers({
  user,
  signIn,
  signUp,
  changePassword,
  forgotPassword,
  updateUserInfo,
});
