import makeReducer from '../../factories/update-entity-factories/reducer';
import { combineReducers } from 'redux';

const changePassword = makeReducer('Update', 'user', 'password');

export default combineReducers({
  changePassword,
});
