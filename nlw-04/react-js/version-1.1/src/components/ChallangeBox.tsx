import React, { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import {
  Container,
  Active,
  NotActive,
  FailButton,
  SucceededButton,
} from '../styles/components/ChallangeBox';

const ChallangeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <FailButton type="button" onClick={resetChallenge}>
              Falhei
            </FailButton>
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
