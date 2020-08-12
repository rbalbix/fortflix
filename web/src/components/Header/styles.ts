import styled from 'styled-components';

export const Menu = styled.nav`
  width: 100%;
  height: 9.4rem;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
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
