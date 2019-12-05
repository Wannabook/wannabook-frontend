import React from 'react';

import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';

import {
  StyledGrid,
  StyledRow,
  StyledColumn,
} from '../../ui-kit/components/Layout/Grid';

export const Header = () => (
  <>
    <StyledGrid className="navigation">
      <StyledRow stretched only="mobile tablet" columns="1">
        <StyledColumn>
          <MobileHeader />
        </StyledColumn>
      </StyledRow>
      <StyledRow stretched only="computer" columns="1">
        <StyledColumn>
          <DesktopHeader />
        </StyledColumn>
      </StyledRow>
    </StyledGrid>
  </>
);
