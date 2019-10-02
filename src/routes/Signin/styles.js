import styled from 'styled-components';
import Input from '../../ui-kit/components/Input/index';
import Button from '../../ui-kit/components/Button/index';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 16px;
`;

export const SocialNetworkList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const SocialNetworkLink = styled(Link)`
  flex-basis: 40px;
  height: 40px;
  margin: 10px;
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
    width: 100%;
    margin-bottom: 16px;
  }
`;
