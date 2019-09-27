import React from 'react';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

import { StyledGrid } from '../../ui-kit/components/Layout/Grid';

const Header = () => (
  <>
    <StyledGrid className="navigation">
      <StyledGrid.Row stretched only="mobile tablet" columns="1">
        <StyledGrid.Column>
          <MobileHeader />
        </StyledGrid.Column>
      </StyledGrid.Row>
      <StyledGrid.Row stretched only="computer" columns="1">
        <StyledGrid.Column>
          <DesktopHeader />
        </StyledGrid.Column>
      </StyledGrid.Row>
    </StyledGrid>
  </>
);

export default Header;
