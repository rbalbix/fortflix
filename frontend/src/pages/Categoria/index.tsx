import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

// import { Container } from './styles';

interface IForm {
  name: string;
  description: string;
  color: string;
}

const Categoria: React.FC = () => {
  const initialValues: IForm = {
    name: '',
    description: '',
    color: '#454545',
  };
  const [values, setValues] = useState(initialValues);
  const [categories, setCategories] = useState<IForm[]>([]);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = event.target;
    setValues({
      ...values,
      [String(event.target.getAttribute('name'))]: value,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setCategories([...categories, values]);

    setValues(initialValues);
  }

  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://balbiflix.herokuapp.com/categorias';

    fetch(URL).then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        setCategories(resposta);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da Categoria'
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label='Descrição'
          type='textarea'
          name='description'
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label='Cor'
          type='color'
          name='color'
          value={values.color}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category.name}${index}`}>{category.name}</li>
        ))}
      </ul>

      <Link to='/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Categoria;
