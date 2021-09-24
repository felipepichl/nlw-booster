import React from 'react';
import { View, Text, Image } from 'react-native';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

const SignIn: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {/* eslint-disable prettier/prettier  */}
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
