import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';

import useFetch from '../../hooks/useFetch';
import MasterPage from '../../components/MasterPage';
import Loading from 'react-loading';

import { Container, Content, Caption } from './styles';
import api from '../../services/api';

interface ICategory {
  id: string | number | undefined;
  titulo: string;
  videos: {
    titulo: string;
    url: string;
    description: string;
  }[];
}

interface SubmitProps {
  category: ICategory['id'];
  url: string;
}

const Video: React.FC = () => {
  const history = useHistory();

  async function handleSubmit(values: SubmitProps) {
    const { url } = values;
    const category: ICategory = data.find((cat: ICategory) => {
      return cat.titulo === values.category;
    });

    await api.post('videos?_embed=videos', {
      url,
      categoriaId: category.id,
    });

    history.push('/');
  }

  const { data } = useFetch('categorias?_embed=videos');

  const formik = useFormik({
    initialValues: {
      category: '',
      url: '',
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  if (!data) {
    return (
      <MasterPage>
        <Loading />
      </MasterPage>
    );
  }

  const options = data.map((category: ICategory) => category.titulo);

  return (
    <MasterPage>
      <Content>
        <Caption>Novo Vídeo</Caption>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label='Categoria'
            name='category'
            onChange={formik.handleChange}
            value={formik.values.category}
            suggestions={options}
          />
          <Input
            label='URL do Vídeo'
            name='url'
            onChange={formik.handleChange}
            value={formik.values.url}
          />

          <button type='submit'>SALVAR</button>
        </form>
      </Content>
    </MasterPage>
  );
};

export default Video;
