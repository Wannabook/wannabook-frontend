import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainFontColor } from '../../../../ui-kit/theme';

export const StyledProfileLink = styled(Link)`
  display: block;
  height: 60px;
  padding-left: 60px;
  font-size: 14px;
  text-align: left;
  line-height: 60px;
  color: ${mainFontColor};
  background-color: #fefeff;
  border-radius: 10px;
`;

export const Illustration = styled.img`
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
