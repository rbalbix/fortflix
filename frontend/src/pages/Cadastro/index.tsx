import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Cadastro: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>
      <Link to='/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Cadastro;
