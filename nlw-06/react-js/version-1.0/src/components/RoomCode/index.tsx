import React from 'react';

import copyImg from '../../assets/copy.svg';

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
};

const RoomCode: React.FC<RoomCodeProps> = ({ code }) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  // eslint-disable-next-line prettier/prettier
  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="" />
      </div>
      <span>{code}</span>
    </Container>
  );
};

export { RoomCode };
