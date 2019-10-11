import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

import { AuthContext } from '../../../core/auth/index';
import { SideBarStateContext } from '../../App/sideBarStateContext';
import { getPageUrl } from '../../../routes/RouteResolver';
import {
  IconWrapper,
  SearchButton,
  StyledMobileBar,
  Hamburger,
} from './styles';

import logo from '../images/logo.svg';
import searchIcon from '../images/search.svg';
import profileIcon from '../images/profile.svg';

const UserProfile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  // TODO Use different links depending on loggedIn value
  // we will then make user/:id dynamic depending on id coming from backend

  return isLoggedIn ? (
    <Link to={`${getPageUrl('ACCOUNT')}/123456`}>
      <Image src={profileIcon} />
    </Link>
  ) : (
    <Link to={getPageUrl('AUTH')}>
      <Image src={profileIcon} />
    </Link>
  );
};

const Logo = () => {
  return (
    <Link to="/">
      <Image src={logo} />
    </Link>
  );
};

const MobileHeader = () => {
  const {
    showLeftSideBar,
    isRightSideBarVisible,
    showRightSideBar,
  } = useContext(SideBarStateContext);

  return (
    <StyledMobileBar>
      <IconWrapper>
        <SearchButton onClick={showLeftSideBar}>
          <Image src={searchIcon} />
        </SearchButton>
        <UserProfile />
      </IconWrapper>
      <Logo />
      <Hamburger open={isRightSideBarVisible} onClick={showRightSideBar}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
    </StyledMobileBar>
  );
};

export default MobileHeader;
