import React, { useState, ChangeEvent, FormEvent } from 'react';
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

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.name}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da Categoria'
          name='name'
          value={values.name}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              name='description'
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div>
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
