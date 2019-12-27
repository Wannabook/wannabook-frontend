import React, { Context, FormEvent, useState } from 'react';

import { formValidator } from 'services';

type FormNameType =
  | 'signUp'
  | 'signIn'
  | 'forgotPassword'
  | 'changePassword'
  | 'userInfo';

interface Props {
  children: any;
  className?: string;
  onSubmit: (a: React.SyntheticEvent<FormEvent>) => any;
  isSubmitting: boolean;
  formName: FormNameType;
  formContext: Context<any>;
}

export const Form: React.FC<Props> = ({
  children,
  className,
  onSubmit,
  isSubmitting,
  formName,
  formContext: FormContext,
}) => {
  const [data, setData] = useState<any>({});

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const verificationError = formValidator.verifyMapper[formName](data);

    if (verificationError) {
      return setData({ ...data, error: verificationError.message });
    }

    const { error, ...payload } = data;
    onSubmit(payload);
  };

  const getInputValue = (name: string, defaultValue = '') => {
    if (data[name] === '') return data[name];

    return data[name] || defaultValue;
  };

  const inputChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = e.target.value;
    setData({ ...data, [name]: targetValue, error: '', isUpdated: true });
  };

  const addContextAsProp = (elem: any) =>
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
