import styled, { keyframes } from 'styled-components';
import {
  SubmitButton,
  Form,
  PasswordInput,
  CommonInput,
  Error,
} from 'components';

import { fontSmall } from 'ui-kit';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const StyledEmailInput = styled(CommonInput)`
  margin-bottom: 10px;
`;

export const StyledNameInput = styled(CommonInput)`
  margin-bottom: 10px;
`;

export const StyledPasswordInput = styled(PasswordInput)`
  margin-bottom: 10px;
`;

export const StyledPhoneInput = styled(CommonInput)`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  font-size: ${fontSmall};
  text-align: left;
`;

export const SignInButton = styled(SubmitButton)`
  &&& {
    display: block;
    width: 100%;
    margin-top: 25px;
  }
`;

export const ValidationError = styled(Error)`
  margin-top: 25px;
`;
