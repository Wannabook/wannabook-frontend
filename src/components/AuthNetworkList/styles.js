import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SocialNetworkList = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SocialNetworkLink = styled(Link)`
  flex-basis: 40px;
  height: 40px;
  margin: 10px;
`;
