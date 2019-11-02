import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import { Input } from 'ui-kit';

export const PasswordInput = ({ error, formContext, name, ...restProps }) => {
  const [showPass, setShowPass] = useState(false);
  const { getInputValue, inputChange } = useContext(formContext);
  const showContent = () => setShowPass(!showPass);
  const iconName = showPass ? 'eye' : 'eye slash';
  const inputType = showPass ? 'text' : 'password';
  const icon = <Icon name={iconName} link onClick={showContent} />;

  return (
    <Input
      {...restProps}
      type={inputType}
      name={name}
      value={getInputValue(name)}
      onChange={inputChange(name)}
      icon={icon}
      fluid
      error={!!error}
    />
  );
};
