import {
  createUpdateEntityFieldActions,
  createSetInitStateAction,
} from '../../factories/update-entity-factories/action';

export const updateUserPasswordActions = createUpdateEntityFieldActions(
  'update',
  'user',
  'password'
);

export const setInitStateAction = createSetInitStateAction(
  'update',
  'user',
  'password'
);
