import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import { Container, Content, RoomTitle, FormFooter } from './styles';

const Room: React.FC = () => {
  return (
    <Container>
      <header>
        <Content>
          <img src={logoImg} alt="Logo" />
          <RoomCode />
        </Content>
      </header>

      <main>
        <RoomTitle>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </RoomTitle>

        <form>
          <textarea placeholder="What do you ask?" />

          <FormFooter>
            <span>
              For send a question,
              <button type="button">SignIn</button>
            </span>
            <Button type="submit" title="Send a question" />
          </FormFooter>
        </form>
      </main>
    </Container>
  );
};

export { Room };
