import styled from 'styled-components';

export const Container = styled.footer`
  padding: 3.2rem 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  max-width: 16.8rem;

  @media (max-width: 700px) {
    max-width: 11rem;
  }
`;

export const Channel = styled.a`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;

  @media (max-width: 700px) {
    width: 3rem;
    height: 3rem;
  }
`;
