import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../core/auth/index';
import {
  StyledIcon,
  StyledLink,
  StyledMenu,
  StyledMobileBar,
  StyleMenuItem,
  Hamburger,
} from './styles';

const links = [
  {
    url: '/',
    linkText: 'Home',
  },
  {
    url: '/categories',
    linkText: 'Categories',
  },
  {
    url: '/companies',
    linkText: 'Organizations',
  },
];

const UserIcon = () => {
  // TODO Use different links depending on loggedIn value
  return (
    <AuthContext.Consumer>
      {loggedIn => {
        // we will then make user/:id dynamic depending on id coming with token
        return loggedIn ? (
          <Link to="/user/123456">
            <StyledIcon name="user outline" />
          </Link>
        ) : (
          <Link to="/auth">
            <StyledIcon name="user outline" />
          </Link>
        );
      }}
    </AuthContext.Consumer>
  );
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  return (
    <nav className="navigation">
      <StyledMobileBar>
        <Hamburger open={open} onClick={handleOpenMenu}>
          <span />
          <span />
          <span />
          <span />
        </Hamburger>
        <UserIcon />
      </StyledMobileBar>
      <StyledMenu open={open} className="menu">
        {links.map(link => (
          <StyleMenuItem key={link.url}>
            <StyledLink to={link.url}>{link.linkText}</StyledLink>
          </StyleMenuItem>
        ))}
      </StyledMenu>
    </nav>
  );
};

export default Navigation;
