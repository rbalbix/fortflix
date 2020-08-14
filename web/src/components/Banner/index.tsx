import React from 'react';

import Video from '../Video';
import { getYouTubeId } from '../../utils';

import logo from '../../assets/images/youtube-icon.svg';

import { Container, Content, Item, Title, VideoButton, Logo } from './styles';

interface IBanner {
  videoTitle: string;
  url: string;
}

export default function Banner({ videoTitle, url }: IBanner) {
  const videoId = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Container backgroundImage={bgUrl}>
      <Content>
        <Item>
          <Title>{videoTitle}</Title>
        </Item>

        <Item>
          <Video videoId={videoId} />
          <VideoButton href={url}>
            <Logo src={logo} alt='Video Logo' />
          </VideoButton>
        </Item>
      </Content>
    </Container>
  );
}
