import styled, { keyframes } from 'styled-components';
import Form from '../../../../common/FormComponents/Form';
import SubmitButton from '../../../../common/FormComponents/SubmitButton';
import Error from '../../../../common/FormComponents/Error';
import PasswordInput from '../../../../common/FormComponents/PasswordInput';
import Button from '../../../../../ui-kit/components/Button';
import { fontSmall } from '../../../../../ui-kit/theme/default';

export const Title = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  margin-bottom: 20px;
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

export const CancelButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    margin-top: 25px;
  }
`;

export const ErrorMessage = styled(Error)`
  margin-top: 25px;
`;
