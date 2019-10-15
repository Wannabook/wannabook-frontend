import { getLoadingProps } from '../../../common/selectors';

export const getForgotPasswordLoadingProps = getLoadingProps(
  'auth',
  'forgotPassword'
);
