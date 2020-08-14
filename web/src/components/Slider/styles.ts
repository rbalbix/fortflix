import styled from 'styled-components';

export const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 3rem;
    height: 3rem;
    transform: initial;

    &:before {
      font-size: 3rem;
    }
  }

  .slick-prev {
    left: 0.8rem;
  }

  .slick-next {
    right: 0.8rem;
  }
`;
