import React from 'react';

import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Aside } from '../../components/Aside';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

const NewRoom: React.FC = () => {
  return (
    <Container>
      <Aside />
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
