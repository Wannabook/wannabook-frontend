import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ErrorContainer } from './styles';

const Error = ({ className, formContext, ...restProps }) => {
  const { error } = useContext(formContext);

  return (
    <ErrorContainer {...restProps} className={className}>
      {error}
    </ErrorContainer>
  );
};

Error.propTypes = {
  className: PropTypes.string,
  formContext: PropTypes.object.isRequired,
};

export default Error;
