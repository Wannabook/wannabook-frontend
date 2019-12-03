import { combineReducers } from 'redux';

import user from './user/reducer';
import changePassword from './changePassword/reducer';
import forgotPassword from './forgotPassword/reducer';
import updateUserInfo from './updateUserInfo/reducer';
import signUp from './signUp/reducer';
import { signInReducer } from './signIn/reducer';

export const authReducer = combineReducers({
  user,
  signIn: signInReducer,
  signUp,
  changePassword,
  forgotPassword,
  updateUserInfo,
});
