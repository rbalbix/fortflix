import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
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

export const ContentAreaContainerItem = styled.div`
  width: 50%;
  display: inline-block;
  /* margin-bottom: 0rem; */
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ContentAreaContainerCategory = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block;
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 700px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

export const ContentAreaContainerDescription = styled.p`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ContentAreaContainerTitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    font-size: 32px;
    text-align: center;
  }
`;

interface BannerProps {
  readonly backgroundImage: string;
}

export const BannerMainContainer = styled.section<BannerProps>`
  height: 80vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  /* background-image: ${(props) => `url(${props.backgroundImage})`}; */
  background-size: cover;
  background-position: center;
  @media (max-width: 700px) {
    height: auto;
    min-height: 50vh;
  }

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
    background: linear-gradient(0deg, #222222 0%, transparent 100%);
  }
`;

export const WatchButton = styled.a`
  /* font-family: 'Roboto', sans-serif; */
  /* box-sizing: border-box; */
  cursor: pointer;
  /* padding: 16px 24px; */
  /* font-style: normal;
  font-weight: bold; */
  /* font-size: 16px; */
  /* outline: none; */
  /* border-radius: 5px; */
  /* text-decoration: none; */
  /* display: inline-block; */
  /* border: 0px solid transparent; */
  /* color: var(--black); */
  background: transparent;
  /* border-color: var(--black); */
  transition: opacity 0.3s;
  display: none;
  margin: 0 auto;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
