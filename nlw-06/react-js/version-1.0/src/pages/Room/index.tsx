import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Container, Content, RoomTitle, FormFooter, UserInfo } from './styles';

type RoomParams = {
  id: string;
};

const Room: React.FC = () => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  async function handleNewQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="Logo" />
          <RoomCode code={roomId} />
        </Content>
      </header>

      <main>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form onSubmit={handleNewQuestion}>
          <textarea
            placeholder="What do you ask?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FormFooter>
            {user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>
                For send a question,
                <button type="button">SignIn</button>
              </span>
            )}
            <Button type="submit" title="Send a question" disabled={!user} />
          </FormFooter>
        </form>
      </main>
    </Container>
  );
};

export { Room };
