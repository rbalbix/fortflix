import React from 'react';

import { getYouTubeId } from '../../utils';

import { Card } from './styles';

interface IVideo {
  title: string;
  url: string;
}

const VideoCard: React.FC<IVideo> = ({ title, url }) => {
  return (
    <Card
      title={title}
      href={url}
      bgImg={`https://img.youtube.com/vi/${getYouTubeId(url)}/hqdefault.jpg`}
    />
  );
};

export default VideoCard;
