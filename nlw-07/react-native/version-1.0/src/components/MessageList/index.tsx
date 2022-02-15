import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services/api';

import { Message, MessageProps } from '../Message';

import { styles } from './styles';

const MessageList: React.FC = () => {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMssages() {
      const response = await api.get<MessageProps[]>('/messages/last3');

      setCurrentMessages(response.data);
    }

    fetchMssages();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map(message => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
};

export { MessageList };
