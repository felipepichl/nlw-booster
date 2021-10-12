import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import { styles } from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  function handleSignIn() {
    navigate('Home');
  }

  return (
    <Background>
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

          <ButtonIcon title="Entra com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
};

export { SignIn };
