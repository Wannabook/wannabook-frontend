import styled from 'styled-components';
import Button from '../../../ui-kit/components/Button';
import { Form } from 'semantic-ui-react';
import { warningColor } from '../../../ui-kit/theme';

export const Container = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledChangePasswordForm = styled(Form)`
  &&& {
    padding: 20px 0;
  }
`;

export const InputBlock = styled(Form.Field)`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  display: block;
  margin-top: 5px;
  color: ${warningColor};
`;

export const ChangePasswordButton = styled(Button)`
  &&& {
    display: block;
    margin: 16px 0;
    width: 100%;
  }
`;
