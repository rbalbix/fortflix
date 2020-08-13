import React from 'react';

import { Container, Content, Spinner, Text } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Content>
        <Spinner type='spokes' width='6rem' height='6rem' />
        <Text>Carregando...</Text>
      </Content>
    </Container>
  );
};

export default Loading;
