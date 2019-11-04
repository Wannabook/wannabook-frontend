import React, { useContext } from 'react';

import { Input } from 'ui-kit';

export const CommonInput = ({
  error,
  formContext,
  type,
  name,
  defaultValue,
  ...restProps
}) => {
  const { getInputValue, inputChange } = useContext(formContext);

  return (
    <Input
      {...restProps}
      type={type}
      name={name}
      value={getInputValue(name, defaultValue)}
      onChange={inputChange(name)}
      fluid
      error={!!error}
    />
  );
};
