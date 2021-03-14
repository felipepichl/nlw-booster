import React from 'react';

import { Container, CountdownButton } from '../styles/components/Countdown';

const Countdown: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </Container>

      <CountdownButton type="button">Iniciar um ciclo</CountdownButton>
    </>
  );
};

export default Countdown;
