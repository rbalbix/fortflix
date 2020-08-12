import React from 'react';

import Slider, { SliderItem } from './components/Slider';

import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';

export interface IProps {
  ignoreFirstVideo?: boolean;
  category: {
    titulo: string;
    cor: string;
    link_extra?: {
      text: string;
      url: string;
    };
    videos: {
      titulo: string;
      url: string;
    }[];
  };
}

const Carousel: React.FC<IProps> = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title>{categoryTitle}</Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard videoTitle={video.titulo} videoURL={video.url} />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
