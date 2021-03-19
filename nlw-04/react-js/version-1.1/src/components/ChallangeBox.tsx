import React from 'react';

import {
  Container,
  Active,
  NotActive,
  FailButton,
  SucceededButton,
} from '../styles/components/ChallangeBox';

const ChallangeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <Active>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <FailButton type="button">Falhei</FailButton>
            <SucceededButton type="button">Completei</SucceededButton>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>Finalize um cliclo para receber defafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </NotActive>
      )}
    </Container>
  );
};

export default ChallangeBox;
