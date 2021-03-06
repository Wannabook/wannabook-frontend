import styled from 'styled-components';
import { Input, Button } from 'ui-kit';

export const Form = styled.form`
  padding: 0 50px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;

export const SignInButton = styled(Button)`
  &&& {
    display: block;
    border-radius: 0;
    margin: 16px 0;
    width: 100%;
  }
`;
