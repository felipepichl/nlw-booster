import React from 'react';

import copyImg from '../../assets/copy.svg';

import { Container } from './styles';

const RoomCode: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={copyImg} alt="" />
      </div>
      <span>Room Id</span>
    </Container>
  );
};

export { RoomCode };
