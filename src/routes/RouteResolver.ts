// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pagesData: any = {
  AUTH: { route: '/auth' },
  HOME: { route: '/' },
  COMPANIES: { route: '/companies' },
  CATEGORIES: { route: '/categories' },
  CATEGORY: { route: '/category' },
  SERVICES: { route: '/services' },
  SERVICE: { route: '/service' },
  'SIGN-IN': { route: '/sign-in' },
  'SIGN-UP': { route: '/sign-up' },
  'SIGN-OUT': { route: '/sign-out' },
  PROFILE: { route: '/profile' },
  'FORGOT-PASSWORD': { route: '/forgot-password' },
};

const getPageUrl = (pageCode: string) => {
  const pageInfo = pagesData[pageCode];
  if (!pageInfo) {
    console.error(`No page with code "${pageCode}"!!!`);

    return null;
  }

  return pageInfo.route;
};

export { getPageUrl };
