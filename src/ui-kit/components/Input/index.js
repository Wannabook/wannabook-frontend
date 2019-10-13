import React from 'react';
import PropTypes from 'prop-types';
import { Input as SemanticInput } from 'semantic-ui-react';
import styled from 'styled-components';
import { brandPrimaryColor, warningColor } from '../../theme';

const PrimaryInput = styled(SemanticInput)`
  &&& input {
    padding: 10px 15px 14px;
    border-radius: 10px;
    &:focus {
      box-shadow: 0 4px 7px rgba(129, 122, 182, 0.2);
    }
  }
`;

const InputWithError = styled(SemanticInput)`
  &&& input {
    padding: 10px 15px 14px;
    border-radius: 10px;
    color: ${warningColor};
    border-style: solid;
    border-width: 1px;
    border-color: ${warningColor};
    outline-color: transparent;

    &:focus {
      box-shadow: 0 4px 7px rgba(129, 122, 182, 0.2);
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
