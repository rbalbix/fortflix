import React from 'react';

import ButtonLink from '../ButtonLink';

import Logo from '../../assets/logo.svg';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Logo' />
      </a>

      <ButtonLink href='/' className='ButtonLink'>
        Novo vídeo
      </ButtonLink>
    </nav>
  );
};

export default Menu;
