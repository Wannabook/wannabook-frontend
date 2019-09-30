import styled, { createGlobalStyle } from 'styled-components';

import { mainBackgroundColor } from '../../ui-kit/theme';

import MontserratEOT from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-regular.eot'; /* IE9 Compat Modes */
import MontserratEOTIEFix from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-regular.eot?#iefix'; /* IE6-IE8 */
import MontserratWoff2 from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-regular.woff2'; /* Super Modern Browsers */
import MontserratWoff from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-regular.woff'; /* Modern Browsers */
import MontserratTTF from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-regular.ttf'; /* Safari, Android, iOS */

import MontserratEOT600 from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-600.eot'; /* IE9 Compat Modes */
import MontserratEOTIEFix600 from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-600.eot?#iefix'; /* IE6-IE8 */
import MontserratWoff2600 from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-600.woff2'; /* Super Modern Browsers */
import MontserratWoff600 from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-600.woff'; /* Modern Browsers */
import MontserratTTF600 from '../../ui-kit/theme/default/fonts/montserrat-v14-cyrillic_latin-600.ttf'; /* Safari, Android, iOS */

export const GlobalStyle = createGlobalStyle`
  body {
      background-color: ${mainBackgroundColor};
      @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 400;
           src: url(${MontserratEOT}) format('embedded-opentype');
           src: local('Montserrat Regular'), local('Montserrat-Regular');
           src: url(${MontserratEOTIEFix}) format('embedded-opentype');
           src: url(${MontserratWoff2}) format('woff2');
           src: url(${MontserratWoff}) format('woff');
           src: url(${MontserratTTF}) format('truetype');
      }
      
      @font-face {
           font-family: Montserrat;
           font-style: normal;
           font-weight: 600;
           src: url(${MontserratEOT600}) format('embedded-opentype');
           src: local('Montserrat SemiBold'), local('Montserrat-SemiBold');
           src: url(${MontserratEOTIEFix600}) format('embedded-opentype');
           src: url(${MontserratWoff2600}) format('woff2');
           src: url(${MontserratWoff600}) format('woff');
           src: url(${MontserratTTF600}) format('truetype');
      }
      font-family: 'Montserrat', sans-serif;
      
      a {
        color: #6b62ef;
      }
      a:hover {
        color: #6b62ef
      }
      
      
  }
`;

export const RoutesContainer = styled.div`
  padding: 0 15px;
  min-height: calc(100vh - 140px);
`;
