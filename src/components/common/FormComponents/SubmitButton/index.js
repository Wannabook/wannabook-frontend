import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'ui-kit';

export const SubmitButton = ({
  children,
  className,
  formContext,
  ...restProps
}) => {
  const { isSubmitting, isUpdated } = useContext(formContext);

  return (
    <Button
      {...restProps}
      className={className}
      type="submit"
      loading={isSubmitting}
      disabled={!isUpdated}
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
