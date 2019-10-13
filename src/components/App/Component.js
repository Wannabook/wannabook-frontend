import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { Sidebar } from 'semantic-ui-react';

import { JWT_TOKEN } from '../../constants';
import MobileSideBar from '../SideBar';
import Page from '../Page';
import CategoryListMenu from '../CategoryListMenu';
import Search from '../Search';

import { AuthContext } from '../../core/auth/index';
import { SideBarStateContext } from './sideBarStateContext';

import { StyledSideBar } from '../SideBar/styles';
import { GlobalStyle } from './styles';

//TODO: Replace after connect to the real API
// const hasJWToken = () => localStorage.getItem(JWT_TOKEN);
const hasJWToken = () => false;

const App = props => {
  const { isLoggedIn, loadUser, error } = props;

  useEffect(() => {
    if (!isLoggedIn) {
      loadUser();
    }
  }, []);

  const [isLeftSideBarVisible, setLeftSideBarVisibility] = useState(false);
  const [isRightSideBarVisible, setRightSideBarVisibility] = useState(false);

  const showLeftSideBar = () => setLeftSideBarVisibility(true);
  const showRightSideBar = () => setRightSideBarVisibility(true);
  const hideLeftSideBar = () => setLeftSideBarVisibility(false);
  const hideRightSideBar = () => setRightSideBarVisibility(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <SideBarStateContext.Provider
        value={{
          isLeftSideBarVisible,
          showLeftSideBar,
          isRightSideBarVisible,
          showRightSideBar,
        }}
      >
        <div>
          <Normalize />
          <GlobalStyle />

          <Sidebar.Pushable as={StyledSideBar}>
            <MobileSideBar
              direction="left"
              visible={isLeftSideBarVisible}
              onHide={hideLeftSideBar}
            >
              <Search />
            </MobileSideBar>
            <MobileSideBar
              direction="right"
              visible={isRightSideBarVisible}
              onHide={hideRightSideBar}
            >
              <CategoryListMenu />
            </MobileSideBar>

            <Sidebar.Pusher
              dimmed={isLeftSideBarVisible || isRightSideBarVisible}
            >
              <Page />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </SideBarStateContext.Provider>
    </AuthContext.Provider>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default App;
