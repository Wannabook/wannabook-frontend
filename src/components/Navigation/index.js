import React, { useState } from 'react';
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
    url: '/about',
    linkText: 'About',
  },
  {
    url: '/news',
    linkText: 'News',
  },
  {
    url: '/contacts',
    linkText: 'Contacts',
  },
];

const UserIcon = () => <StyledIcon name="user outline" />;

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
