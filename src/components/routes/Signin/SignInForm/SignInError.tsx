import React from 'react';

import { ErrorContainer } from 'components/index';

interface SignInErrorProps {
  error: string | null;
}

export const SignInError: React.FC<SignInErrorProps> = ({ error }) => (
  <ErrorContainer>{error}</ErrorContainer>
);
