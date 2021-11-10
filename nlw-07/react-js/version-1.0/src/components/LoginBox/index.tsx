import React from 'react';

import { VscGithubInverted } from 'react-icons/vsc'

import styles from './styles.module.scss'

const LoginBox: React.FC = () => {
  const signInUrl = `https://githunb.com/login/oauth/authorize?scope=user&clientId=${}$redirect_uri=http://localhost:3000`

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>

      <a href="#" className={styles.signInWtihGithub}>
        <VscGithubInverted size="24"/>
        Entrar com Github
      </a>
    </div>
  )
}

export  { LoginBox };