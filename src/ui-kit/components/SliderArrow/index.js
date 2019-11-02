import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
`;

export const SliderArrow = props => {
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

SliderArrow.propTypes = {
  name: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
