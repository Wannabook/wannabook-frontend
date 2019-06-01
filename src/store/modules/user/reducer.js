import makeReducerFor from '../../crud-entity-factories/reducer';

export default makeReducerFor('User');

// we can make another reducer for user that contains unique
// user-related stuff and combine it with the default CRUD reducer
