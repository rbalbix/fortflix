import React from 'react';

import Slider from '../Slider';

import { Container, Title, Item } from './styles';
import VideoCard from '../VideoCard';

export interface IProps {
  category: {
    titulo: string;
    videos: {
      titulo: string;
      url: string;
    }[];
  };
}

const Carousel: React.FC<IProps> = ({ category }) => {
  const { titulo, videos } = category;

  return (
    <Container>
      <Title>{titulo}</Title>

      <Slider>
        {videos.map(({ titulo, url }) => (
          <Item key={titulo}>
            <VideoCard title={titulo} url={url} />
          </Item>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
