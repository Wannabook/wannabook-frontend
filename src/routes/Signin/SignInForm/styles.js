import styled, { keyframes } from 'styled-components';
import Form from '../../../components/common/FormComponents/Form';
import CommonInput from '../../../components/common/FormComponents/CommonInput';
import PasswordInput from '../../../components/common/FormComponents/PasswordInput';
import SubmitButton from '../../../components/common/FormComponents/SubmitButton';
import Error from '../../../components/common/FormComponents/Error';

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

export const StyledEmailInput = styled(CommonInput)`
  margin-bottom: 10px;
`;

export const StyledPasswordInput = styled(PasswordInput)`
  margin-bottom: 10px;
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
