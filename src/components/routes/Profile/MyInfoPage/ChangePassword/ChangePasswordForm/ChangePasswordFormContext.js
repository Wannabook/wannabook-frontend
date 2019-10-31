import React from 'react';

export const ChangePasswordFormContext = React.createContext({
  getInputValue: (name, defaultValue = '') => null,
  inputChange: name => e => {},
  isSubmitting: false,
  error: '',
});
