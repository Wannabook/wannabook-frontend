import React from 'react';

export const ChangePasswordFormContext = React.createContext({
  getInputValue: (name: string, defaultValue = '') => null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  inputChange: (name: string) => (e: React.SyntheticEvent<InputEvent>) => {},
  isSubmitting: false,
  error: '',
});
