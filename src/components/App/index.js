import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';

import MobileSideBar from '../SideBar';
import { Page } from '../Page/Page';
import CategoryListMenu from '../CategoryListMenu';
import { Search } from '../Search/Search';
import { StyledSideBar } from '../SideBar/styles';
import { getUser, loadUser } from '../../store/auth/user';
import { SideBarStateContext, AuthContext } from './contexts';

import { GlobalStyle } from './styles';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUser);
  // TODO handle errors on ui (discuss with UI dep)

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(loadUser());
    }
  }, [dispatch, isLoggedIn]);

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
  error: PropTypes.string,
};
