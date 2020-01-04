import React, { useEffect, useState } from 'react';
import { Normalize } from 'styled-normalize';
import { useDispatch, useSelector } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import { getLogInLoadingProps, isUserLoggedIn, loadUserAction } from 'store';
import { ACCESS_TOKEN } from 'consts';

import { NavigationSideBar as MobileSideBar } from '../SideBar';
import { Page } from '../Page';
import { CategoryListMenu } from '../CategoryListMenu';
import { Search } from '../Search';
import { StyledSideBar } from '../SideBar/styles';
import { SideBarStateContext, AuthContext } from './contexts';

import { GlobalStyle } from './styles';

interface Location {
  pathname: string;
}

type AppProps = RouteComponentProps<Location> & {
  location: Location;
};

const App: React.FC<AppProps> = ({ location }) => {
  const dispatch = useDispatch();
  // TODO: would be nice to have this logic in a separate layer, e.g. auth layer
  const isLoggedIn = useSelector(isUserLoggedIn);
  const { loading, loaded } = useSelector(getLogInLoadingProps);
  const tokenInLS = localStorage.getItem(ACCESS_TOKEN);
  // TODO handle errors on ui (discuss with UI dep)

  // kostyl!
  // since google and maybe other auth providers require redirects to their pages,
  // we in the end need some frontend url to which backend will redirect back our
  // browser. Upon redirection, in the url, we will have all required info like token,
  // auth_method and id_token. This info needs to be grabbed by TokenGrabber component.
  // It lives at `frontend_url/auth/<provider-name>/token`. When we're on such routes,
  // we know we don't need to load the user as it leads to bugs
  const shouldLoadUser =
    !isLoggedIn && tokenInLS && !/\/auth\/.+\/token/.test(location.pathname);

  useEffect(() => {
    if (shouldLoadUser) {
      dispatch(loadUserAction.request());
    }
  }, [dispatch, isLoggedIn, location.pathname, shouldLoadUser]);

  const [isLeftSideBarVisible, setLeftSideBarVisibility] = useState(false);
  const [isRightSideBarVisible, setRightSideBarVisibility] = useState(false);

  const showLeftSideBar = () => setLeftSideBarVisibility(true);
  const showRightSideBar = () => setRightSideBarVisibility(true);
  const hideLeftSideBar = (): void => setLeftSideBarVisibility(false);
  const hideRightSideBar = (): void => setRightSideBarVisibility(false);

  console.log('experimenting with typescript linting')
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userLoading: loading, userLoaded: loaded }}
    >
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

export default withRouter(App);
