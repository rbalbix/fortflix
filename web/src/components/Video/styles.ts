import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
