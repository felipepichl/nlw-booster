import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

import { Container } from './styles';

import illustration from '../../assets/illustration.svg';
import logo from '../../assets/logo.svg';

const NewRoom: React.FC = () => {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />

            <Button title="Criar sala" />
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
