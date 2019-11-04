import styled from 'styled-components';
import { Error, Form, SubmitButton, CommonInput } from 'components';
import { fontSmall } from 'ui-kit';

export const StyledForm = styled(Form)`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  padding-left: 10px;
  font-size: ${fontSmall};
`;

export const StyledTextInput = styled(CommonInput)`
  margin-bottom: 10px;
`;

export const StyledBirthdateInput = styled(CommonInput)`
  margin-bottom: 20px;
`;

export const StyledEmailInput = styled(CommonInput)`
  margin-bottom: 10px;
`;

export const SaveUserInfoButton = styled(SubmitButton)`
  &&& {
    display: block;
    width: 100%;
    margin-top: 15px;
  }
`;

export const ErrorMessage = styled(Error)`
  margin-top: 25px;
`;
