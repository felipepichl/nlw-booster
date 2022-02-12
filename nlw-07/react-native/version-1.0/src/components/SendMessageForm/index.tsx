import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { COLORS } from '../../theme';

import { Button } from '../Button';

import { styles } from './styles';

const SendMessageForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa oara o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
      />
    </View>
  );
};

export { SendMessageForm };