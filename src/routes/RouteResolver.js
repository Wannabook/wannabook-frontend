const pagesData = {
  AUTH: { route: '/auth' },
  HOME: { route: '/' },
  COMPANIES: { route: '/companies' },
  CATEGORIES: { route: '/categories' },
  CATEGORY: { route: '/category' },
  'FORGOT-PASSWORD': { route: '/forgot-password' },
  SERVICES: { route: '/services' },
  SERVICE: { route: '/service' },
  'SIGN-IN': { route: '/sign-in' },
  'SIGN-UP': { route: '/sign-up' },
  'SIGN-OUT': { route: '/sign-out' },
  USER: { route: '/user' },
};

const getPageUrl = pageCode => {
  const pageInfo = pagesData[pageCode];
  if (!pageInfo) {
    console.error(`No page with code "${pageCode}"!!!`);
    return null;
  }
  return pageInfo.route;
};

export { getPageUrl };
