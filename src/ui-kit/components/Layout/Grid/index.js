import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

export const StyledGrid = styled(Grid)`
  &&&.ui.grid {
    margin: 0 !important;
  }

  &&&.ui.grid .column {
    padding: 0;
  }
  &&&.ui.stackable.grid > .column:not(.row) {
    padding: 0 !important;
    margin-bottom: 2rem !important;
  }

  &&&.ui.grid > .row {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
`;
