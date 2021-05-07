import React, { useContext } from 'react';

import { Container, CountdownButton } from '../styles/components/Countdown';

import { CountdownContext } from '../contexts/CountdownContext';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <CountdownButton disabled isActive={isActive}>
          Ciclo encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              isActive={isActive}
              type="button"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton
              isActive={isActive}
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
};

export default Countdown;
