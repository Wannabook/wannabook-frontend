import { combineReducers } from 'redux';
import changePassword from './changePassword/reducer';
import auth from './auth/reducer';

export default combineReducers({
  changePassword,
  auth,
});
