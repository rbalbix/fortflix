import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import channelImg from '../../assets/images/channelLogo.svg';

import { Menu, Logo, Channel, Avatar } from './styles';

const Header: React.FC = () => {
  return (
    <Menu>
      <Link to='/'>
        <Logo src={logoImg} alt='Logo' />
      </Link>

      <Channel href='https://bit.ly/30KLPpi' target='_blank'>
        <Avatar src={'https://bit.ly/33NDljc'} alt='Channel Avatar' />
        <Logo src={channelImg} alt='Channel Logo' />
      </Channel>
    </Menu>
  );
};

export default Header;
