import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
// import { SendMessageForm } from '../../components/SendMessageForm';

import { styles } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />

      <SignInBox />
      {/* <SendMessageForm /> */}
    </View>
  );
};

export { Home };
