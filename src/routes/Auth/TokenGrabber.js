import React from 'react';

const TokenGrabber = () => {
  React.useEffect(() => {
    const accessToken = getUrlParameter('access_token');
    console.warn('accessToken', accessToken);

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    window.location = '/';
  });

  // TODO: Do something prettier here
  return 'Выполняем вход в систему...';
};

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);

  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default TokenGrabber;
