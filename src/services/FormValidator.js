export default class FormValidator {
  static requiredPasswordLength = 8;

  verifyPassword = ({ password }) => {
    return password.length < FormValidator.requiredPasswordLength
      ? { message: 'Password too short' }
      : null;
  };

  verifyEmail = ({ email }) => {
    return email.includes('-') ? { message: 'Wrong email' } : null; //TODO: Update checking condition
  };

  verifySignInForm = data => {
    const error = this.verifyEmail(data);

    return error ? error : this.verifyPassword(data);
  };

  verifySignUpForm = data => {
    const error = this.verifyEmail(data);

    return error ? error : this.verifyPassword(data);
  };
}
