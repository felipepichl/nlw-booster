import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import styles from './styles.module.scss';

const SendMessageForm: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
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
    </div>
  );
}

export { SendMessageForm };