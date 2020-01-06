import React, { Context, HTMLProps, useContext } from 'react';

import { Button } from 'ui-kit';
import { ButtonContentProps } from 'semantic-ui-react';

interface Props {
  className: string;
  formContext: Context<any>;
  children: React.ReactNode;
}

export const SubmitButton: React.FC<Props &
  HTMLProps<HTMLButtonElement> &
  ButtonContentProps> = ({
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
