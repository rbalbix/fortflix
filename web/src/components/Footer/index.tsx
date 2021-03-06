import React from 'react';
import { Container, Channel, Logo, Avatar } from './styles';

import channelImg from '../../assets/images/channelLogo.svg';

function Footer() {
  return (
    <Container>
      <Channel href='https://bit.ly/30KLPpi' target='_blank'>
        <Avatar src={'https://bit.ly/33NDljc'} alt='Channel Avatar' />
        <Logo src={channelImg} alt='Channel Logo' />
      </Channel>
    </Container>
  );
}

export default Footer;
