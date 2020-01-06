import React from 'react';

interface SideBarState {
  isRightSideBarVisible: boolean;
  isLeftSideBarVisible: boolean;
  showRightSideBar: () => void;
  showLeftSideBar: () => void;
}

export const SideBarStateContext = React.createContext<SideBarState>({
  isRightSideBarVisible: false,
  isLeftSideBarVisible: false,
  showRightSideBar: () => {},
  showLeftSideBar: () => {},
});

interface Auth {
  isLoggedIn: boolean;
  userLoading: boolean;
  userLoaded: boolean;
}
export const AuthContext = React.createContext<Auth>({
  isLoggedIn: false,
  userLoading: false,
  userLoaded: false,
});
