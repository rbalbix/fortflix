import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  ContentAreaContainerItem,
  ContentAreaContainerDescription,
  ContentAreaContainerTitle,
  WatchButton,
} from './styles';

import ytLogo from '../../assets/images/youtube-icon.svg';

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  );
}

interface IBanner {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}: IBanner) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/hqdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainerItem>
          <ContentAreaContainerTitle>{videoTitle}</ContentAreaContainerTitle>

          <ContentAreaContainerDescription>
            {videoDescription}
          </ContentAreaContainerDescription>
        </ContentAreaContainerItem>

        <ContentAreaContainerItem>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton href={url} target='_blank'>
            <img src={ytLogo} alt='YouTube Logo' style={{ width: '8rem' }} />
          </WatchButton>
        </ContentAreaContainerItem>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
