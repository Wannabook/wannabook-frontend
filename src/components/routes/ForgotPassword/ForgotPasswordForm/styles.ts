import styled, { keyframes } from 'styled-components';

import { Form, SubmitButton, CommonInput, Error } from 'components/index';

import { fontSmall } from 'ui-kit';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const StyledEmailInput = styled(CommonInput)`
  margin-bottom: 40px;
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

export const ErrorMessage = styled(Error)`
  margin-top: 25px;
`;
