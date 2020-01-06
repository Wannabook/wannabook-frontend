import React from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer } from 'components/index';

interface SignUpErrorProps {
  error: string | null;
}

export const SignUpError: React.FC<SignUpErrorProps> = ({ error }) => (
  <ErrorContainer>{error}</ErrorContainer>
);

SignUpError.propTypes = {
  error: PropTypes.string,
};
