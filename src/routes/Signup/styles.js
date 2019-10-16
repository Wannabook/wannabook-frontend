import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignUpContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
  text-align: center;
`;

export const Description = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-align: center;
  font-size: 12px;
  text-decoration: underline;
`;

export const SignInLink = styled(StyledLink)`
  font-weight: bold;
`;
