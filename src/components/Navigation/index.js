import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import IconExampleDisabled from '../Icon';

const StyledMobileBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 10px;
  background-color: #eeeeee;
`;

const StyledMenu = styled.ul`
  position: relative;
  margin: 0;
  padding: 0 15px;
  list-style: none;
  overflow: auto;
  transition: height 0.5s;
  height: ${props => (props.open ? '200px' : '0')};
  overflow: ${props => (props.open ? 'auto' : 'hidden')};
`;

const StyleMenuItem = styled.li`
  padding-bottom: 15px;
  padding-top: 16px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid #b2b2b6;
`;

const StyledLink = styled(Link)`
  color: #b2b2b6;
  text-decoration: none;
`;

const Humburger = styled.div`
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

const UserIcon = () => <Icon name="user outline" />;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  return (
    <nav className="navigation">
      <StyledMobileBar>
        <Humburger open={open} onClick={handleOpenMenu}>
          <span />
          <span />
          <span />
          <span />
        </Humburger>
        <UserIcon />
      </StyledMobileBar>
      <StyledMenu open={open} className="menu">
        <StyleMenuItem>
          <StyledLink to="/">Home</StyledLink>
        </StyleMenuItem>
        <StyleMenuItem>
          <StyledLink to="/companies">Companies</StyledLink>
        </StyleMenuItem>
        <StyleMenuItem>
          <StyledLink to="/company/123456">Gorod Krasoty</StyledLink>
        </StyleMenuItem>
        <StyleMenuItem>
          <StyledLink to="/user/123456">User Pasha</StyledLink>
        </StyleMenuItem>
        <StyleMenuItem>
          <StyledLink to="/login">Login</StyledLink>
        </StyleMenuItem>
        <StyleMenuItem>
          <StyledLink to="/logout">Log out</StyledLink>
        </StyleMenuItem>
      </StyledMenu>
    </nav>
  );
};

export default Navigation;
