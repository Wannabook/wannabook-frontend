import React, { useContext } from 'react';

import { ErrorContainer } from './styles';

export const Error: React.FC<any> = ({
  className,
  formContext,
  ...restProps
}) => {
  const { error } = useContext(formContext);

  return (
    <ErrorContainer {...restProps} className={className}>
      {error}
    </ErrorContainer>
  );
};

export * from './styles';
