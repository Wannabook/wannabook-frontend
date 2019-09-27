import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { mainBackgroundColor } from '../../../ui-kit/theme';

export const StyledMobileBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 15px;
  background-color: ${mainBackgroundColor};
`;

export const Hamburger = styled.div`
  width: 60px;
  height: 28px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    margin: 0 auto;
    position: absolute;
    right: 0;
    height: 2px;
    width: 30px;
    background: #111111;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: ${props => (props.open ? '18px' : '0')};
    width: ${props => (props.open ? '0' : '30px')};
    left: ${props => (props.open ? '50%' : '0')};
  }

  & span:nth-child(2) {
    top: 12px;
    transform: ${props => (props.open ? 'rotate(45deg)' : 'none')};
  }

  & span:nth-child(3) {
    top: 12px;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'none')};
  }

  & span:nth-child(4) {
    top: ${props => (props.open ? '12px' : '26px')};
    width: ${props => (props.open ? '0' : '30px')};
    left: ${props => (props.open ? '50%' : '0')};
  }
`;

export const StyledIcon = styled(Icon)`
  margin: 0 !important;
  margin-top: 5px !important;
  font-size: 28px !important;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60px;
  a {
    display: inline;
  }
`;

export const SearchButton = styled.div``;
