import React from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer } from 'components';

export const SignUpError = ({ error }) => (
  <ErrorContainer>{error}</ErrorContainer>
);

SignUpError.propTypes = {
  error: PropTypes.string,
};
