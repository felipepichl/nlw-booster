import React from 'react';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';

const AppointmentCreate: React.FC = () => {
  const members = [
    {
      id: '1',
      username: 'Felipe',
      avatar_url: 'https://github.com/felipepichl.png',
      status: 'online',
    },
  ];

  return (
    <Background>
      <Header title="Agendar Partida" />
    </Background>
  );
};

export { AppointmentCreate };
