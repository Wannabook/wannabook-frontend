import React from 'react';

export const ForgotPasswordFormContext = React.createContext({
  getInputValue: (name, defaultValue = '') => null,
  inputChange: name => e => {},
  isSubmitting: false,
  error: '',
});
