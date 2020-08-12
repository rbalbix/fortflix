import React, { useState, FormEvent, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import { IFormCategory as IForm, useForm } from '../../hooks/useForm';

const Categoria: React.FC = () => {
  const initialValues: IForm = {
    titulo: '',
    description: '',
    color: '#454545',
  };

  const { values, handleChange, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState<IForm[]>([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setCategories([...categories, values]);

    clearForm();
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
      <h1>Cadastro de categoria: {values.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da Categoria'
          type='text'
          name='titulo'
          value={values.titulo}
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
          <li key={`${category.titulo}${index}`}>{category.titulo}</li>
        ))}
      </ul>

      <Link to='/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Categoria;
