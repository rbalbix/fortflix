import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import PageDefault from '../../components/PageDefault';

interface ICategory {
  id: string | number | undefined;
  titulo: string;
  cor: string;
  link_extra?: {
    text: string;
    url: string;
  };
  videos: {
    titulo: string;
    url: string;
    description: string;
  }[];
}

const Home: React.FC = () => {
  const [dadosIniciais, setDadosIniciais] = useState<ICategory[]>([]);
  useEffect(() => {
    const URL = window.location.href.includes('localhost')
      ? 'http://localhost:8080/categorias?_embed=videos'
      : 'https://fortflix.herokuapp.com/categorias?_embed=videos';

    fetch(URL).then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        setDadosIniciais(resposta);
        return;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  }, []);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && <div>Loading...</div>}

      {dadosIniciais.map((categoria: ICategory, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0]?.videos[0]?.titulo}
                url={dadosIniciais[0]?.videos[0]?.url}
                videoDescription={dadosIniciais[0]?.videos[0]?.description}
              />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}
    </PageDefault>
  );
};

export default Home;
