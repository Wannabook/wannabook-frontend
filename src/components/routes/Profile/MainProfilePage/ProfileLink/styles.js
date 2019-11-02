import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainFontColor, white } from 'ui-kit';

export const ProfileLinkContainer = styled(Link)`
  position: relative;
  display: block;
  height: 60px;
  padding-left: 60px;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: left;
  line-height: 60px;
  color: ${mainFontColor};
  background-color: #fefeff;
  border-radius: 10px;
`;

export const Icon = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
`;

export const NotificationIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: red;
  border-radius: 50%;
  color: ${white};
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
`;
