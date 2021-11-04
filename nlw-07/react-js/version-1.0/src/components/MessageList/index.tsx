import React from 'react';

import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg'

const MessageList: React.FC = () => {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageCOntent}>A new message</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/felipepichl.png" alt="Felipe Pichl" />
            </div>
            <span>Felipe Pichl</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export { MessageList };