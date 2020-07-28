import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../ButtonLink';

import Logo from '../../assets/logo.svg';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='Logo' />
      </Link>

      <ButtonLink as={Link} to='/cadastro' className='ButtonLink'>
        Novo vídeo
      </ButtonLink>
    </nav>
  );
};

export default Menu;
