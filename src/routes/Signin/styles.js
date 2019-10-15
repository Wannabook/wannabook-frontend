import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  padding-top: 60px;
  text-align: center;
`;

export const SocialNetworkList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SocialNetworkIcon = styled.div`
  flex-basis: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
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
