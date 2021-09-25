import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import userImg from '../../assets/rodrigo.png';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Felipe Pichl</Text>
      </View>

      <Image source={userImg} style={styles.image} />
    </View>
  );
};

export default Header;
