import styled from 'styled-components';

import { white } from '../../ui-kit/theme';

export const AdvantagesListContainer = styled.div`
  margin: 0 -15px;
  padding: 60px;
  background-color: #6b62ef;
`;

export const Advantage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  padding: 10px;
  background-color: ${white};
  border-radius: 5px;
  text-align: center;

  &&& img {
    display: inline-block;
  }

  &&& p {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
  }
`;
