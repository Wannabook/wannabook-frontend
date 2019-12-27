import React from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer } from 'components/index';

export const SignInError = ({ error }) => (
  <ErrorContainer>{error}</ErrorContainer>
);

SignInError.propTypes = {
  error: PropTypes.string,
};
