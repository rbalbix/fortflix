import React from 'react';

import { Container, Iframe } from './styles';

interface IVideo {
  videoId: string;
}

function Video({ videoId }: IVideo) {
  return (
    <Container>
      <Iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </Container>
  );
}

export default Video;
