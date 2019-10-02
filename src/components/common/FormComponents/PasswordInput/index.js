import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import Input from '../../../../ui-kit/components/Input';

const PasswordInput = props => {
  const [showPass, setShowPass] = useState(false);
  const handleOpenMenu = () => setShowPass(!showPass);
  const iconName = showPass ? 'eye' : 'eye slash';
  const inputType = showPass ? 'text' : 'password';
  const icon = <Icon name={iconName} link onClick={handleOpenMenu} />;

  return <Input {...props} type={inputType} icon={icon} />;
};

export default PasswordInput;
