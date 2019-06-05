import { createAction } from 'redux-actions';

export const createCrudActions = entity => {
  return {
    [`LOAD_${entity.toUpperCase()}`]: createAction(
      `LOAD_${entity.toUpperCase()}`
    ),
    [`LOAD_${entity.toUpperCase()}_SUCCESS`]: createAction(
      `LOAD_${entity.toUpperCase()}_SUCCESS`
    ),
    [`LOAD_${entity.toUpperCase()}_FAILURE`]: createAction(
      `LOAD_${entity.toUpperCase()}_FAILURE`
    ),
  };
};
