import React from 'react';
import { Image } from 'semantic-ui-react';
import { getPageUrl } from '../../routes/RouteResolver';
import { SocialNetworkLink, SocialNetworkList } from './styles';

import facebookIcon from './images/f.svg';
import vkIcon from './images/vk.svg';
import googleIcon from './images/vk.svg';
import odnoklassnikiIcon from './images/ok.svg';

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
  return (
    <SocialNetworkList>
      {socialNetworkList.map(item => (
        <SocialNetworkLink key={item.name} to={item.url}>
          <Image src={item.icon} />
        </SocialNetworkLink>
      ))}
    </SocialNetworkList>
  );
};
