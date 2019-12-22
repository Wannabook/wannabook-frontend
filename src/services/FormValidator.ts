import { SingInRequestPayload } from '../store/auth/signIn';
import { SignUpRequestPayload } from '../store/auth/signUp';

export default class FormValidator {
  static requiredPasswordLength = 8;

  verifyPassword = (password: string) => {
    return password.length < FormValidator.requiredPasswordLength
      ? { message: 'Пароль слишком короткий' }
      : null;
  };

  verifyEmail = (email: string) => {
    return email.indexOf('@') > -1
      ? { message: 'Неправильный адрес электронной почты' }
      : null;
  };

  verifySignInForm = ({ email, password }: SingInRequestPayload) => {
    const error = this.verifyEmail(email);

    return error ? error : this.verifyPassword(password);
  };

  verifySignUpForm = ({ email, password }: SignUpRequestPayload) => {
    const error = this.verifyEmail(email);

    return error ? error : this.verifyPassword(password);
  };

  // TODO: remove this inline interface once we have payload types for forgotPassword stuff
  verifyForgotPasswordForm = ({ email }: { email: string }) => {
    return this.verifyEmail(email);
  };

  // TODO: replace this inline interface with payload type from changePassword feature
  verifyChangePasswordForm = ({
    oldPassword,
    newPassword,
    repeatPassword,
  }: {
    [key: string]: string;
  }) => {
    const newPasswordError = this.verifyPassword(newPassword);
    const matchPasswordError =
      newPassword !== repeatPassword
        ? { message: 'Пароли не совпадают' }
        : null;

    return newPasswordError ? newPasswordError : matchPasswordError;
  };

  // TODO: what does it do?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars
  verifyUserInfo = (data: any) => {
    return null;
  };

  verifyMapper = {
    signIn: this.verifySignInForm,
    signUp: this.verifySignUpForm,
    forgotPassword: this.verifyForgotPasswordForm,
    changePassword: this.verifyChangePasswordForm,
    userInfo: this.verifyUserInfo,
  };
}
