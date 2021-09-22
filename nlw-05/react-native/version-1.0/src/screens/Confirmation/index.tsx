import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import { styles } from './styles';

const Confirmation: React.FC = () => {
  const { navigate } = useNavigation();

  function handleMoveOn() {
    navigate('PlantSelect');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>

        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subTitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button title="Começar" onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { Confirmation };
