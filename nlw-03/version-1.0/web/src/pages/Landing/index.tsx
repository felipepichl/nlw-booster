import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Container, Contant, Location, ButtonEnterApp } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Contant>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve fevicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Guaíba</strong>
          <span>Rio Grande do Sul</span>
        </Location>

        <ButtonEnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </ButtonEnterApp>
      </Contant>
    </Container>
  );
};

export default Landing;
