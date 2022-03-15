import React from 'react';

import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Aside />
      <main>
        <div>
          <img src={logo} alt="letmeask" />
          <button type="button">
            <img src={googleIconImg} alt="Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />

            <Button title="Entrar na sala" />

            {/* <button type="submit">Entrar na sala</button> */}
          </form>
        </div>
      </main>
    </Container>
  );
};

export { Home };
