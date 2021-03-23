import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { Container, CountdownButton } from '../styles/components/Countdown';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const { startNewCallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startCountdown();
    }
  }, [isActive, time]);

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
