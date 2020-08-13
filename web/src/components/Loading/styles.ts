import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Container = styled.div`
  width: 90vw;
  height: calc(100vh - 15rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 15rem;
  height: 14rem;

  padding: 1rem;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-loading);
`;

export const Spinner = styled(ReactLoading)``;

export const Text = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  line-height: 1.8rem;
`;
