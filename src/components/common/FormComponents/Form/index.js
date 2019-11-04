import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { formValidator } from 'services';

export const Form = ({
  children,
  className,
  onSubmit,
  isSubmitting,
  formName,
  formContext: FormContext,
}) => {
  const [data, setData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const verificationError = formValidator.verifyMapper[formName](data);
    if (verificationError) {
      return setData({ ...data, error: verificationError.message });
    }

    const { error, ...payload } = data;
    onSubmit(payload);
  };

  const getInputValue = (name, defaultValue = '') => {
    if (data[name] === '') return data[name];

    return data[name] || defaultValue;
  };

  const inputChange = name => e => {
    const targetValue = e.target.value;
    setData({ ...data, [name]: targetValue, error: '', isUpdated: true });
  };

  const addContextAsProp = elem =>
    React.cloneElement(elem, { formContext: FormContext });

  const childrenWithProps = React.Children.map(children, child =>
    addContextAsProp(child)
  );

  return (
    <FormContext.Provider
      value={{
        getInputValue,
        inputChange,
        isSubmitting,
        error: data.error,
        isUpdated: data.isUpdated || false,
      }}
    >
      <form className={className} method="POST" onSubmit={handleSubmit}>
        {childrenWithProps}
      </form>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  formName: PropTypes.oneOf(Object.keys(formValidator.verifyMapper)).isRequired,
  formContext: PropTypes.object.isRequired,
};
