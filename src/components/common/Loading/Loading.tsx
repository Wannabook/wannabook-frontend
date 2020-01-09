import React from 'react';
import styled, { css } from 'styled-components';

interface LoadingProps {
  fixed?: boolean;
  placeholder?: string;
}

export const Loading: React.FC<LoadingProps> = ({ placeholder, ...props }) => (
  <StyledLoader {...props}>
    <div>{placeholder || 'Загрузка...'}</div>
  </StyledLoader>
);

const StyledLoader = styled.div<LoadingProps>`
  ${props =>
    props.fixed &&
    css`
      background: white;
      position: absolute;
      color: rgba(0, 0, 0, 0.25);
      font-size: 28px;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `}
`;
