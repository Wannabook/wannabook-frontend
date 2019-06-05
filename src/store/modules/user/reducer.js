import makeReducer from '../../crud-entity-factories/reducer';
import { combineReducers } from 'redux';

export default makeReducer('User');

// we can make another reducer for user that contains unique
// user-related stuff and combine it with the default CRUD reducer
