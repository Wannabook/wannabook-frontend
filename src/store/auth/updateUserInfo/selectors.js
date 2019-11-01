import { getLoadingProps } from '../../common/selectors';

export const updateUserInfoLoadingProps = getLoadingProps(
  'auth',
  'updateUserInfo'
);
