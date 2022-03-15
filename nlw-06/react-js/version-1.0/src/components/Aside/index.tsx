import React from 'react';

import illustration from '../../assets/illustration.svg';

import { Container } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <img src={illustration} alt="Illustration" />
      <strong>Crie salas de Q&amp;A ao-vivo</strong>
      <p>Tire as dúvidas da sa audiência em tempo real</p>
    </Container>
  );
};

export { Aside };
