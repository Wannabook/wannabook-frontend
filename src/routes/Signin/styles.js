import styled from 'styled-components';
import Input from '../../ui-kit/components/Input/index';
import Button from '../../ui-kit/components/Button/index';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/common/FormComponents/PasswordInput';

export const SignInContainer = styled.div`
  padding-top: 60px;
  text-align: center;
`;
export const SocialNetworkList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialNetworkLink = styled(Link)`
  flex-basis: 40px;
  height: 40px;
  margin: 10px;
`;

export const Description = styled.p`
  text-align: center;
  margin-bottom: 5px;
`;

export const Form = styled.form`
  padding: 20px 0;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;
export const StyledPasswordInput = styled(PasswordInput)`
  width: 100%;
  margin-bottom: 30px;
`;

export const SignInButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  font-size: 12px;
  text-decoration: underline;
`;

export const ForgotPasswordLink = styled(StyledLink)`
  margin-bottom: 40px;
`;

export const SignUpLink = styled(StyledLink)`
  font-weight: bold;
`;
