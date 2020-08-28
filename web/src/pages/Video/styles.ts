import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--white);
`;

export const Content = styled.div`
  width: 90vw;
  height: 40rem;

  max-width: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 0.01rem solid var(--color-border);
  margin: 45px auto 0;
  padding: 2rem 1rem;

  > form {
    width: 70vw;
    max-width: 700px;

    > button {
      width: 100%;
      color: var(--color-primary);
      border: 1px solid var(--color-primary);
      border-radius: 0.4rem;
      outline: none;
      cursor: pointer;

      padding: 1.6rem 2.4rem;
      text-decoration: none;

      display: inline-block;

      font-size: 1.6rem;
      font-weight: 700;

      background: none;
      transition: color 0.2s;
      transition: opacity 0.3;

      &:hover,
      &:focus {
        color: var(--color-primary-dark);
        opacity: 0.8;
      }
    }
  }
`;

export const Caption = styled.h1`
  font-size: 4rem;
  line-height: 4.5rem;
  letter-spacing: 2px;
`;
