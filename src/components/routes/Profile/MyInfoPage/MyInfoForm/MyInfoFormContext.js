import React from 'react';

export const MyInfoFormContext = React.createContext({
  getInputValue: (name, defaultValue = '') => null,
  inputChange: name => e => {},
  isSubmitting: false,
  error: '',
});
