export default class FormValidator {
  static requiredPasswordLength = 8;

  verifyPassword = password => {
    return password.length < FormValidator.requiredPasswordLength
      ? { message: 'Password too short' }
      : null;
  };

  verifyEmail = email => {
    return email.includes('-') ? { message: 'Wrong email' } : null; //TODO: Update checking condition
  };

  verifySignInForm = ({ email, password }) => {
    const error = this.verifyEmail(email);

    return error ? error : this.verifyPassword(password);
  };

  verifySignUpForm = ({ email, password }) => {
    const error = this.verifyEmail(email);

    return error ? error : this.verifyPassword(password);
  };

  verifyForgotPasswordForm = ({ email }) => {
    return this.verifyEmail(email);
  };

  verifyChangePasswordForm = ({ oldPassword, newPassword, repeatPassword }) => {
    const newPasswordError = this.verifyPassword(newPassword);
    const matchPasswordError =
      newPassword !== repeatPassword
        ? { message: 'Пароли не совпадают' }
        : null;

    return newPasswordError ? newPasswordError : matchPasswordError;
  };

  verifyMapper = {
    signIn: this.verifySignInForm,
    signUp: this.verifySignUpForm,
    forgotPassword: this.verifyForgotPasswordForm,
    changePassword: this.verifyChangePasswordForm,
  };
}
