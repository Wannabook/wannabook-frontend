import { createAction } from 'redux-actions';

export const createUpdateEntityFieldActions = (action, entity, field) => {
  return {
    [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}`]: createAction(
      `${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}`
    ),
    [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_SUCCESS`]: createAction(
      `${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_SUCCESS`
    ),
    [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_FAILURE`]: createAction(
      `${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_FAILURE`
    ),
  };
};

export const createSetInitStateAction = (action, entity, field) => {
  return {
    [`${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_INIT`]: createAction(
      `${action.toUpperCase()}_${entity.toUpperCase()}_${field.toUpperCase()}_INIT`
    ),
  };
};
