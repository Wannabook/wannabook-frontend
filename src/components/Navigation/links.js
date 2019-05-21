import { getPageUrl } from '../../routes/RouteResolver';

export const links = [
  {
    url: getPageUrl('HOME'),
    linkText: 'Home',
    mobile: true,
    desktop: true,
  },
  {
    url: getPageUrl('CATEGORIES'),
    linkText: 'Categories',
    mobile: true,
    desktop: false,
  },
  {
    url: getPageUrl('COMPANIES'),
    linkText: 'Organizations',
    mobile: true,
    desktop: true,
  },
  // auth links (signup, signin and auth) will be available
  // by pressing on user icon in the top right corner
];
