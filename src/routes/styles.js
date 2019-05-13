import Input from '../ui-kit/components/Input';
import Button from '../ui-kit/components/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

export const SocialNetworkList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const SocialNetworkLink = styled(Link)`
  border-radius: 50%;
  border: solid blue 1px;
  flex-basis: 32px;
  height: 32px;
  margin: 8px;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Form = styled.form`
  padding: 20px 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const StyledInput = styled(Input)`
  &&& {
    width: 100%;
    &&& input {
      border-radius: 0;
    }
  }
`;

export const SignInButton = styled(Button)`
  &&& {
    display: block;
    border-radius: 0;
    margin: 16px 0;
    width: 100%;
  }
`;
