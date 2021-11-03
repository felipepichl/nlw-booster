import React from 'react';

import styles from './styles.module.scss'

const LoginBox: React.FC = () => {
  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>

      <a href="#" className={styles.signInWtihGithub}>
        Entrar com Github
      </a>
    </div>
  )
}

export  { LoginBox };