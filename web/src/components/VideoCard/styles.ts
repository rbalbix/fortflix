import styled from 'styled-components';

interface VideoProps {
  bgImg: string;
}

export const Card = styled.a.attrs((props) => ({
  target: '_blank',
}))<VideoProps>`
  width: 29.8rem;
  height: 16.6rem;

  border-radius: 4px;

  cursor: pointer;

  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-size: cover;
  background-position: center;

  display: flex;

  transition: opacity 0.3s ease-in-out;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
