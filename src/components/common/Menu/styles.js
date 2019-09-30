import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuHeader = styled.div`
  font-weight: bold;
`;

export const MenuItem = styled(NavLink)`
  display: block;
  margin-bottom: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;
