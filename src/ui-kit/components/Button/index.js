import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import {
  brandPrimaryColor,
  secondaryColor,
  warningColor,
  white,
} from '../../theme';

const PrimaryButton = styled(Button)`
  &&& {
    color: ${white};
    background-color: ${brandPrimaryColor};
  }
`;

const SecondaryButton = styled(Button)`
  &&& {
    color: ${white};
    background-color: ${secondaryColor};
  }
`;

const WarningButton = styled(Button)`
  &&& {
    color: ${white};
    background-color: ${warningColor};
  }
`;

const WNBButton = props => {
  const { primary, secondary, warning } = props;
  if (primary) return <PrimaryButton>{props.children}</PrimaryButton>;
  if (secondary) return <SecondaryButton>{props.children}</SecondaryButton>;
  if (warning) return <WarningButton>{props.children}</WarningButton>;

  return <Button>{props.children}</Button>;
};

WNBButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  warning: PropTypes.bool,
  children: PropTypes.node,
};

export default WNBButton;
