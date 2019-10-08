import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({
  children,
  className,
  onSubmit,
  isSubmitting,
  verify,
  formContext: FormContext,
}) => {
  const [data, setData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const verificationError = verify(data);
    if (verificationError) {
      return setData({ ...data, error: verificationError.message });
    }

    const { error, ...payload } = data;
    onSubmit(payload);
  };

  const getInputValue = (name, defaultValue = '') => {
    return data[name] || defaultValue;
  };

  const inputChange = name => e => {
    const targetValue = e.target.value;
    setData({ ...data, [name]: targetValue, error: '' });
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
  verify: PropTypes.func.isRequired,
  formContext: PropTypes.object.isRequired,
};

export default Form;
