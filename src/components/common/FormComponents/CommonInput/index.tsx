import React, { Context, useContext } from 'react';

import { Input } from 'ui-kit';
import { InputProps } from 'semantic-ui-react';

interface Props {
  error: object;
  formContext: Context<any>;
  type: string;
  name: string;
  defaultValue: string | number | null;
}

export const CommonInput: React.FC<Props & InputProps> = ({
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
