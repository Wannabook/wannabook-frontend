import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import MobileSideBar from '../SideBar';
import { Page } from '../Page/Page';
import CategoryListMenu from '../CategoryListMenu';
import { Search } from '../Search/Search';
import { StyledSideBar } from '../SideBar/styles';
import { getUser, loadUserRequest } from '../../store/auth/user';
import { SideBarStateContext, AuthContext } from './contexts';

import { GlobalStyle } from './styles';

const App = ({ location }) => {
  console.warn('location', location);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUser);
  // TODO handle errors on ui (discuss with UI dep)

  // kostyl!
  const shouldLoadUser =
    !isLoggedIn && location.pathname !== '/auth/google/token';

  useEffect(() => {
    console.warn(location.pathname);
    if (shouldLoadUser) {
      dispatch(loadUserRequest());
    }
  }, [dispatch, isLoggedIn, location.pathname, shouldLoadUser]);

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
  location: PropTypes.object,
};

export default withRouter(App);
