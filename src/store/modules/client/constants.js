import { createUpdateEntityFieldActions } from '../../factories/update-entity-factories/action';

export const updateUserPasswordActions = createUpdateEntityFieldActions(
  'update',
  'user',
  'password'
);
