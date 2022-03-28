import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import { database } from '../../services/firebase';

const Home: React.FC = () => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    console.log('====================================');
    console.log(roomCode);
    console.log('====================================');

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    // return will be false ! convert in true
    if (!roomRef.exists()) {
      // eslint-disable-next-line no-alert
      alert('Room does not exists');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <Container>
      <Aside />
      <main>
        <div>
          <img src={logo} alt="letmeask" />
          <button type="button" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button title="Entrar na sala" />

            {/* <button type="submit">Entrar na sala</button> */}
          </form>
        </div>
      </main>
    </Container>
  );
};

export { Home };
