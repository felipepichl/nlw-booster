import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

const NewRoom: React.FC = () => {
  const [newRoom, setNewRoom] = useState('');
  const { user } = useAuth();
  const history = useHistory();

  async function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Aside />
      <main>
        <div>
          <img src={logo} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateNewRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />

            <Button title="Criar sala" type="submit" />
          </form>

          <p>
            Quer entrar em uma sala existente?
            <Link to="/">Clique aqui </Link>
          </p>
        </div>
      </main>
    </Container>
  );
};

export { NewRoom };
