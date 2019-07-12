import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import { StyledInput } from './styles';

const PasswordInput = props => {
  const [showPass, setShowPass] = useState(false);
  const handleOpenMenu = () => setShowPass(!showPass);
  const iconName = showPass ? 'eye' : 'eye slash';
  const inputType = showPass ? 'text' : 'password';
  const icon = <Icon name={iconName} link onClick={handleOpenMenu} />;

  return <StyledInput {...props} type={inputType} icon={icon} />;
};

export default PasswordInput;
