import styled from 'styled-components';

interface VideoProps {
  url: string;
}

export const VideoCardContainer = styled.a<VideoProps>`
  width: 29.8rem;
  height: 17rem;

  border-radius: 4px;
  /* text-decoration: none; */
  /* overflow: hidden; */
  cursor: pointer;
  /* color: white; */
  /* flex: 0 0 29.8rem; */
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;

  /* position: relative; */
  display: flex;
  /* align-items: flex-end; */
  /* padding: 16px; */

  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
