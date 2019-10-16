import React from 'react';

export const SignUpFormContext = React.createContext({
  getInputValue: (name, defaultValue = '') => null,
  inputChange: name => e => {},
  isSubmitting: false,
  error: '',
});
