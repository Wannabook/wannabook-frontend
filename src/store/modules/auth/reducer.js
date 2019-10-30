import { combineReducers } from 'redux';
import auth from './auth/reducer';
import changePassword from './changePassword/reducer';
import forgotPassword from './forgotPassword/reducer';
import updateUserInfo from './updateUserInfo/reducer';

export default combineReducers({
  auth,
  changePassword,
  forgotPassword,
  updateUserInfo,
});
