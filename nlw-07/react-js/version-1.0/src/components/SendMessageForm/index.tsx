import React, { useContext, useState, FocusEvent, FormEvent } from 'react';
import { AuthContext } from '../../contexts/auth';

import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import styles from './styles.module.scss';
import { api } from '../../services/api';

const SendMessageForm: React.FC = () => {
  const { user, signOut } = useContext(AuthContext)
  const [message, setMessage] = useState('')

  async function handleSendMessage(event: FormEvent){
    event.preventDefault()
    
    if(!message.trim()) {
      return;
    }

    await api.post('message', {
      message
    })
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton} onClick={signOut}>
        <VscSignOut size="32"/>
      </button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>

        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16"/>
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage } className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea 
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?" 
          onChange={event => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
}

export { SendMessageForm };