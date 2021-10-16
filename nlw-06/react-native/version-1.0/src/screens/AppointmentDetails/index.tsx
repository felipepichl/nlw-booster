import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';

import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

const AppointmentDetails: React.FC = () => {
  const members = [
    {
      id: '1',
      username: 'Felipe',
      avatar: 'https://github.com/felipepichl.png',
      status: 'online',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="shared" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subTitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida de md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subTitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member />}
      />
    </Background>
  );
};

export { AppointmentDetails };
