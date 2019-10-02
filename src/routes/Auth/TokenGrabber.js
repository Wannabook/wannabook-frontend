import React from 'react';

const TokenGrabber = () => {
  React.useEffect(() => {
    const accessToken = getUrlParameter('access_token');
    const authMethod = getUrlParameter('auth_method');
    console.warn('accessToken', accessToken);

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    if (authMethod) {
      localStorage.setItem('authMethod', authMethod);
    }

    window.location = '/';
  });

  // TODO: Render loader here?
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
