import React, { Context, useContext } from 'react';

import {
  GenderToggleContainer,
  ToggleButtonContainer,
  ToggleButton,
  Description,
} from './styles';

import boyIcon from './images/boy.svg';
import girlIcon from './images/girl.svg';

const genderButtons = [
  {
    name: 'male',
    icon: boyIcon,
  },
  {
    name: 'female',
    icon: girlIcon,
  },
];

interface GenderToggleProps {
  userGender: 'male' | 'female' | null;
  formContext: Context<any>;
}

export const GenderToggle: React.FC<GenderToggleProps> = ({
  userGender,
  formContext,
}) => {
  const { getInputValue, inputChange } = useContext(formContext);
  const gender = getInputValue('gender', userGender);

  return (
    <GenderToggleContainer>
      <ToggleButtonContainer>
        <Description>Вы:</Description>
        {genderButtons.map(button => {
          const handleClick = () => {
            inputChange('gender')({ target: { value: button.name } });
          };

          return (
            <ToggleButton
              key={`gender-${button.name}`}
              icon={button.icon}
              active={gender === button.name}
              onClick={handleClick}
            />
          );
        })}
      </ToggleButtonContainer>
      <input type="hidden" id="user-gender-input" name="sex" value={gender} />
    </GenderToggleContainer>
  );
};
