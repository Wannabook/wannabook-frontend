import React from 'react';
import {
  Button as SemanticButton,
  ButtonContentProps,
} from 'semantic-ui-react';
import styled from 'styled-components';

import {
  brandPrimaryColor,
  white,
  mainBackgroundColor,
  lightGrey,
} from '../../theme';

const PrimaryButton = styled(SemanticButton)`
  &&& {
    height: 45px;
    padding: 0;
    color: ${white};
    border-radius: 50px;
    background-color: ${props =>
      props.disabled ? lightGrey : brandPrimaryColor};
    font-family: inherit;
    font-size: inherit;
  }
`;

const SecondaryButton = styled(SemanticButton)`
  &&& {
    height: 45px;
    padding: 0;
    color: ${brandPrimaryColor};
    border-radius: 50px;
    background-color: ${mainBackgroundColor};
    border: 2px solid ${brandPrimaryColor};
    font-family: inherit;
    font-size: inherit;
  }
`;

export const Button = (props: ButtonContentProps) => {
  const { primary, secondary, ...rest } = props;
  if (primary) return <PrimaryButton {...rest}>{props.children}</PrimaryButton>;
  if (secondary)
    return <SecondaryButton {...rest}>{props.children}</SecondaryButton>;

  return <SemanticButton {...props}>{props.children}</SemanticButton>;
};
