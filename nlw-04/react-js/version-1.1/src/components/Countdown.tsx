import React, { useEffect, useState } from 'react';

import { Container, CountdownButton } from '../styles/components/Countdown';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, '0')
    .split('');

  function startCountdown() {
    setIsActive(true);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
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

      {isActive ? (
        <CountdownButton
          isActive={isActive}
          type="button"
          onClick={startCountdown}
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
  );
};

export default Countdown;
