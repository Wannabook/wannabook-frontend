import React from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from 'semantic-ui-react';

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
`;

type Direction = 'left' | 'right';

interface SliderArrowProp extends IconProps {
  style?: object;
  onClick?: () => void;
  direction: Direction;
}

export const SliderArrow: React.FC<SliderArrowProp> = props => {
  const { style, onClick, name, direction, size } = props;

  return (
    <IconWrapper
      className="slick-arrow"
      style={{ ...style, [direction]: '-25px' }}
      onClick={onClick}
    >
      <Icon name={name} size={size} />
    </IconWrapper>
  );
};
