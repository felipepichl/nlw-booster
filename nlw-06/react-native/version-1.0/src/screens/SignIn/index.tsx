/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se
          {'\n'}
          e organize suas
          {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games
          {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entra com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
};

export { SignIn };
