import { combineReducers } from 'redux';

import { signUpReducer } from './signUp';
import { signInReducer } from './signIn';
import { loadUserReducer } from './user';
// TODO: will be migrated to TS as we'll be connecting them with backend
import changePassword from './changePassword/reducer';
import forgotPassword from './forgotPassword/reducer';
import updateUserInfo from './updateUserInfo/reducer';

export const authReducer = combineReducers({
  user: loadUserReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  changePassword,
  forgotPassword,
  updateUserInfo,
});
