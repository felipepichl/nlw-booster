import React from 'react';

import { Container } from './styles';
import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <aside>
        <img src={illustration} alt="Illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sa audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logo} alt="letmeask" />
          <button type="button">
            <img src={googleIconImg} alt="Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Dgite o código da sala" />

            {/* <button type="submit">Entrar na sala</button> */}
          </form>
        </div>
      </main>
    </Container>
  );
};

export default Home;
