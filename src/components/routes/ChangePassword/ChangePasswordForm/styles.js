import styled, { keyframes } from 'styled-components';
import { SubmitButton, Form, Error, PasswordInput } from 'components/index';

import { fontSmall } from 'ui-kit';

export const StyledForm = styled(Form)`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-size: ${fontSmall};
`;

export const StyledPasswordInput = styled(PasswordInput)`
  margin-bottom: 10px;
`;

export const ChangePasswordButton = styled(SubmitButton)`
  &&& {
    display: block;
    width: 100%;
    margin-top: 25px;
  }
`;

export const ErrorMessage = styled(Error)`
  margin-top: 25px;
`;
