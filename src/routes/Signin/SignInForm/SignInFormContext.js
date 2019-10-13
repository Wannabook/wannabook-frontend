import React from 'react';

export const SignInFormContext = React.createContext({
  getInputValue: (name, defaultValue = '') => null,
  inputChange: name => e => {},
  isSubmitting: false,
  error: '',
});
