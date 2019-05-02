import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const StyledMobileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  background-color: #eeeeee;
`;

export const StyledMenu = styled.ul`
  position: relative;
  margin: 0;
  padding: 0 15px;
  list-style: none;
  overflow: hidden;
  transition: height 0.5s;
  height: ${props => (props.open ? 'auto' : '0')};
`;

export const StyleMenuItem = styled.li`
  padding-bottom: 15px;
  padding-top: 16px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid #b2b2b6;
`;

/* TODO use NavLink to style currently opened item */
export const StyledLink = styled(Link)`
  color: #b2b2b6;
  text-decoration: none;
`;

export const Hamburger = styled.div`
  width: 40px;
  height: 35px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 7px;
    width: 100%;
    background: #111111;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: ${props => (props.open ? '18px' : '0')};
    width: ${props => (props.open ? '0' : '100%')};
    left: ${props => (props.open ? '50%' : '0')};
  }

  & span:nth-child(2) {
    top: 12px;
    transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
  }

  & span:nth-child(3) {
    top: 12px;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'none')};
  }

  & span:nth-child(4) {
    top: ${props => (props.open ? '12px' : '24px')};
    width: ${props => (props.open ? '0' : '100%')};
    left: ${props => (props.open ? '50%' : '0')};
  }
`;

export const StyledIcon = styled(Icon)`
  margin: 0 !important;
  margin-top: 5px !important;
  font-size: 28px !important;
`;
