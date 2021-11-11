import React, { useEffect } from 'react';

import { VscGithubInverted } from 'react-icons/vsc'

import styles from './styles.module.scss'

const LoginBox: React.FC = () => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=9acd88c69d0f2e120d4e`

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithouCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithouCode);
      
    }
  }, [])

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>

      <a href={signInUrl} className={styles.signInWtihGithub}>
        <VscGithubInverted size="24"/>
        Entrar com Github
      </a>
    </div>
  )
}

export  { LoginBox };