import React from 'react';
import { Image } from 'semantic-ui-react';

import { useDispatch } from 'react-redux';

import { getPageUrl } from '../../routes/RouteResolver';
import { SocialNetworkList, SocialNetworkLink } from './styles';

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
    enabled: false,
  },
  {
    name: 'VK',
    id: 'vk',
    url: getPageUrl('HOME'),
    icon: vkIcon,
    enabled: false,
  },
  {
    name: 'Google',
    id: 'gl',
    url: getPageUrl('HOME'),
    icon: googleIcon,
    enabled: true,
  },
  {
    name: 'Odnoklassniki',
    id: 'ok',
    url: getPageUrl('HOME'),
    icon: odnoklassnikiIcon,
    enabled: false,
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
        <SocialNetworkLink key={item.name} onClick={() => handleClick(item.id)}>
          <Image
            src={item.icon}
            style={{
              cursor: !item.enabled && 'not-allowed',
              filter: !item.enabled && 'grayscale(100%)',
            }}
            title={
              item.enabled ? item.name : `${item.name}: скоро будет доступно`
            }
          />
        </SocialNetworkLink>
      ))}
    </SocialNetworkList>
  );
};
