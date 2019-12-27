import React from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer } from 'components/index';

export const SignUpError = ({ error }) => (
  <ErrorContainer>{error}</ErrorContainer>
);

SignUpError.propTypes = {
  error: PropTypes.string,
};
