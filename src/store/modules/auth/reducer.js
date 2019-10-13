import { combineReducers } from 'redux';
import changePassword from './changePassword/reducer';
import logIn from './logIn/reducer';

export default combineReducers({
  changePassword,
  logIn,
});
