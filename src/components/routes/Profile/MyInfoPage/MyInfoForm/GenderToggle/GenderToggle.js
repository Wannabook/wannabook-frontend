import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommonInput from '../../../../../common/FormComponents/CommonInput';

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

export const GenderToggle = ({ userGender }) => {
  const [gender, setGender] = useState(userGender);

  return (
    <GenderToggleContainer>
      <ToggleButtonContainer>
        <Description>Вы:</Description>
        {genderButtons.map(button => {
          const handleClick = () => {
            setGender(button.name);
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

GenderToggle.propTypes = {
  userGender: PropTypes.string,
};

GenderToggle.defaultProps = {
  userGender: 'male',
};
