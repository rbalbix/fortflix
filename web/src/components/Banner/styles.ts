import styled from 'styled-components';

interface BannerProps {
  readonly backgroundImage: string;
}

export const Container = styled.section<BannerProps>`
  height: 80vh;
  position: relative;
  color: var(--white);

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: var(--black);
    opacity: 0.5;
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, var(--black) 0%, transparent 100%);
  }

  @media (max-width: 700px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const Content = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 10;

  @media (max-width: 700px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  width: 50%;
  display: inline-block;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font: 600 4rem Archivo;

  margin: 0 0 2rem 0;

  @media (max-width: 700px) {
    font-size: 3.2rem;
    text-align: center;
  }
`;

export const VideoButton = styled.a.attrs((props) => ({
  target: '_blank',
}))`
  cursor: pointer;

  transition: opacity 0.3s;
  display: none;
  margin: 0 auto;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 8rem;
`;
