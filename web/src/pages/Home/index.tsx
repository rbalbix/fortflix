import React, { lazy, Suspense } from 'react';
import useFetch from '../../hooks/useFetch';

import MasterPage from '../../components/MasterPage';
import Loading from '../../components/Loading';

const Banner = lazy(() => import('../../components/Banner'));
const Carousel = lazy(() => import('../../components/Carousel'));

interface ICategory {
  id: number;
  titulo: string;
  videos: {
    titulo: string;
    url: string;
  }[];
}

const Home: React.FC = () => {
  const { data } = useFetch('categorias?_embed=videos');

  if (!data) {
    return (
      <MasterPage>
        <Loading />
      </MasterPage>
    );
  }

  return (
    <MasterPage>
      <Suspense fallback={<Loading />}>
        <Banner
          videoTitle={data[0].videos[0].titulo}
          url={data[0].videos[0].url}
        />

        {data.map((category: ICategory) => (
          <Carousel key={category.id} category={category} />
        ))}
      </Suspense>
    </MasterPage>
  );
};

export default Home;
