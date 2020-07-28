import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Categoria: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form>
        <label>
          Nome da Categoria:
          <input type='text' />
        </label>

        <button>Cadastrar</button>
      </form>

      <Link to='/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Categoria;
