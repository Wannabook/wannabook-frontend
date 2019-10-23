import React from 'react';
import { Image } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';

import { getPageUrl } from '../../routes/RouteResolver';
import { SocialNetworkList } from './styles';

import facebookIcon from './images/f.svg';
import vkIcon from './images/vk.svg';
import googleIcon from './images/g.svg';
import odnoklassnikiIcon from './images/ok.svg';
import { startGoogleAuth } from '../../store/auth/actions';

const socialNetworkList = [
  {
    name: 'Facebook',
    id: 'fb',
    url: getPageUrl('HOME'),
    icon: facebookIcon,
  },
  {
    name: 'VK',
    id: 'vk',
    url: getPageUrl('HOME'),
    icon: vkIcon,
  },
  {
    name: 'Google',
    id: 'gl',
    url: getPageUrl('HOME'),
    icon: googleIcon,
  },
  {
    name: 'Odnoklassniki',
    id: 'ok',
    url: getPageUrl('HOME'),
    icon: odnoklassnikiIcon,
  },
];
export const AuthNetworkList = () => {
  const dispatch = useDispatch();

  const handleClick = authMethodId => {
    switch (authMethodId) {
      case 'gl': {
        dispatch(startGoogleAuth());
        break;
      }

      default:
        return;
    }
  };

  return (
    <SocialNetworkList>
      {socialNetworkList.map(item => (
        <div key={item.name} onClick={() => handleClick(item.id)}>
          <Image src={item.icon} />
        </div>
      ))}
    </SocialNetworkList>
  );
};
