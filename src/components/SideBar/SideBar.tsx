import React from 'react';
import { Sidebar } from 'semantic-ui-react';

import { Container } from '../../ui-kit/components/Layout/Container';

type DirectionTypes = 'left' | 'right';

interface NavigationSideBarProps {
  visible: boolean;
  direction: DirectionTypes;
  onHide: () => void;
  children: React.ReactNode;
}

export const NavigationSideBar: React.FC<NavigationSideBarProps> = ({
  visible,
  onHide,
  direction,
  children,
}) => {
  return (
    <Sidebar
      as={Container}
      animation="overlay"
      icon="labeled"
      direction={direction}
      inverted
      onHide={onHide}
      vertical
      visible={visible}
    >
      {children}
    </Sidebar>
  );
};
