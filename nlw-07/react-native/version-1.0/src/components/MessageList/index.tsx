import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';

import { styles } from './styles';

const MessageList: React.FC = () => {
  const message1 = {
    id: 'first_01',
    text: 'A frist message',
    user: {
      name: 'Felipe Pichl',
      avatar_url: 'https://github.com/felipepichl.png',
    },
  };

  const message2 = {
    id: 'first_01',
    text: 'A frist message',
    user: {
      name: 'Felipe Pichl',
      avatar_url: 'https://github.com/felipepichl.png',
    },
  };

  const message3 = {
    id: 'first_01',
    text: 'A frist message',
    user: {
      name: 'Felipe Pichl',
      avatar_url: 'https://github.com/felipepichl.png',
    },
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message1} />
      <Message data={message2} />
      <Message data={message3} />
    </ScrollView>
  );
};

export { MessageList };
