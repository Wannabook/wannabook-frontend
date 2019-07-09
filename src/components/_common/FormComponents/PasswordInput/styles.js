import styled from 'styled-components';
import Input from '../../../../ui-kit/components/Input';

export const StyledInput = styled(Input)`
  &&& {
    width: 100%;
    &&& input {
      border-radius: 0;
    }
  }
`;
