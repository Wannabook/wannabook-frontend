import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  text-align: center;
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
