import Input from '../../ui-kit/components/Input';
import Button from '../../ui-kit/components/Button';
import styled from 'styled-components';
import { Header as SemanticHeader } from 'semantic-ui-react';

export const Header = styled(SemanticHeader)`
  &&& {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #484848;
  }
`;

export const ContinueButton = styled(Button)`
  &&& {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ContinueInput = styled(Input)`
  &&& {
    width: 100%;
  }
`;
