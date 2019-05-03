import React from 'react';
import PropTypes from 'prop-types';
import { Input as SemanticInput } from 'semantic-ui-react';
import styled from 'styled-components';
import { brandPrimaryColor, warningColor } from '../../theme';

const PrimaryInput = styled(SemanticInput)`
  &&& {
    &&& input {
      &:focus {
        box-shadow: 0 0 5px ${brandPrimaryColor};
      }
    }
  }
`;

const InputWithError = styled(SemanticInput)`
  &&& {
    &&& input {
      color: ${warningColor};
      border-style: solid;
      border-width: 1px;
      border-color: ${warningColor};

      &:focus {
        box-shadow: 0 0 5px ${warningColor};
      }
    }
  }
`;

const Input = props => {
  const { error, ...rest } = props;
  if (error) return <InputWithError {...rest} />;

  return <PrimaryInput {...props} />;
};

Input.propTypes = {
  error: PropTypes.bool,
};

export default Input;