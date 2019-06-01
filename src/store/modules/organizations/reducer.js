import makeReducerFor from '../../crud-entity-factories/reducer';

export default makeReducerFor('Organizations');

// we can make another reducer for organizations that contains unique
// org-related stuff and combine it with the default CRUD reducer
