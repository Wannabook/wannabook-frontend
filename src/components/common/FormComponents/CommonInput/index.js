import React, { useContext } from 'react';

import Input from '../../../../ui-kit/components/Input';

const CommonInput = ({ error, formContext, type, name, ...restProps }) => {
  const { getInputValue, inputChange } = useContext(formContext);

  return (
    <Input
      {...restProps}
      type={type}
      name={name}
      value={getInputValue(name)}
      onChange={inputChange(name)}
      fluid
      error={!!error}
    />
  );
};

export default CommonInput;
