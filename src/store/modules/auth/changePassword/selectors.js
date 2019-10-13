import { getLoadingProps } from '../../../common/selectors';

export const getChangePasswordLoadingProps = getLoadingProps(
  'auth',
  'changePassword'
);
