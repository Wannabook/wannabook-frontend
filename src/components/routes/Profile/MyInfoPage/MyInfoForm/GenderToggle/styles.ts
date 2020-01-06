import styled from 'styled-components';
import { white } from 'ui-kit';

export const GenderToggleContainer = styled.div`
  margin-bottom: 40px;
`;

export const ToggleButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
`;

export const Description = styled.span`
  position: absolute;
  top: 0;
  left: 0;
`;

interface ToggleButtonProps {
  icon: string;
  active: boolean;
}

export const ToggleButton = styled.div<ToggleButtonProps>`
  width: 70px;
  height: 70px;
  background-color: ${white};
  background-image: url(${props => props.icon});
  background-position: center center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.5)};

  &:focus {
    outline: none;
  }
`;
