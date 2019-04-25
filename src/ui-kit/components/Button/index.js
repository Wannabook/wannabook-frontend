import React from 'react';
import PropTypes from 'prop-types';
import { Button as SemanticButton } from 'semantic-ui-react';
import styled from 'styled-components';
import { brandPrimaryColor, secondaryColor, white } from '../../theme';

const PrimaryButton = styled(SemanticButton)`
  &&& {
    color: ${white};
    background-color: ${brandPrimaryColor};
  }
`;

const SecondaryButton = styled(SemanticButton)`
  &&& {
    color: ${white};
    background-color: ${secondaryColor};
  }
`;

const Button = props => {
  const { primary, secondary, ...rest } = props;
  if (primary) return <PrimaryButton {...rest}>{props.children}</PrimaryButton>;
  if (secondary)
    return <SecondaryButton {...rest}>{props.children}</SecondaryButton>;

  return <SemanticButton {...props}>{props.children}</SemanticButton>;
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
