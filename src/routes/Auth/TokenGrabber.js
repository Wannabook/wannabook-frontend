import React from 'react';
import { withRouter } from 'react-router-dom';

import { ACCESS_TOKEN, AUTH_METHOD, ID_TOKEN } from '../../constants';

const TokenGrabber = ({ history }) => {
  React.useEffect(() => {
    const accessToken = getUrlParameter('access_token');
    const authMethod = getUrlParameter('auth_method');
    const idToken = getUrlParameter('id_token');
    console.warn('accessToken', accessToken);

    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
    }

    if (authMethod) {
      localStorage.setItem(AUTH_METHOD, authMethod);
    }

    if (idToken) {
      localStorage.setItem(ID_TOKEN, idToken);
    }

    history.push('/');
  }, [history]);

  // TODO: Render loader here?
  return 'Выполняем вход в систему...';
};

// yes, this is Stackoverflow :(
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);

  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default withRouter(TokenGrabber);
