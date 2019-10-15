import styled from 'styled-components';
import Button from '../../ui-kit/components/Button';
import { white, fontSmall } from '../../ui-kit/theme';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 5px 15px;
  background-color: ${white};
`;

export const CopyRight = styled.span`
  font-size: ${fontSmall};
`;

export const ForBusinessButton = styled(Button)`
  &&& {
    margin-right: 0;
    padding: 10px 15px;
    background-color: #e1e0fc; //TODO: Update background color
    color: #4f55e8;
    border-radius: 50px;
    font-size: ${fontSmall};
  }
`;
