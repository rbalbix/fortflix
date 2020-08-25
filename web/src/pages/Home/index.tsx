import React, { lazy, Suspense, useEffect, useState } from 'react';
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
  const { data: banner } = useFetch('banner');
  const { data } = useFetch('categorias?_embed=videos');

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (banner) {
      fetch(
        `https://noembed.com/embed?url=${banner.url}`
      ).then(async (response) => setTitle((await response.json()).title));
    }
  }, [banner]);

  if (!data || !banner) {
    return (
      <MasterPage>
        <Loading />
      </MasterPage>
    );
  }

  return (
    <MasterPage>
      <Suspense fallback={<Loading />}>
        <Banner videoTitle={title} url={banner.url} />

        {data.map((category: ICategory) => (
          <Carousel key={category.id} category={category} />
        ))}
      </Suspense>
    </MasterPage>
  );
};

export default Home;
