import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../ui-kit/components/Button';

const SubmitButton = ({ children, className, formContext, ...restProps }) => {
  const { isSubmitting } = useContext(formContext);

  return (
    <Button
      {...restProps}
      className={className}
      type="submit"
      loading={isSubmitting}
    >
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  formContext: PropTypes.object.isRequired,
};

export default SubmitButton;
