import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather as Icon } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Description,
  Main,
  Title,
  Input,
  Button,
  ButtonIcon,
  ButtonText,
} from './styles';

import background from '../../assets/home-background.png';
import logo from '../../assets/logo.png';

const Home: React.FC = () => {
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');

  const { navigate } = useNavigation();

  function handleNavigateToPoints() {
    navigate('Points', {
      uf,
      city,
    });
  }

  return (
    <Container>
      <Content source={background} imageStyle={{ width: 274, height: 368 }}>
        <Main>
          <Image source={logo} />

          <View>
            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Description>
          </View>
        </Main>
        <View>
          <Input
            placeholder="Digite a UF"
            value={uf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={setUf}
          />

          <Input
            placeholder="Digite a cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
          />

          <Button onPress={handleNavigateToPoints}>
            <ButtonIcon>
              <Text>
                <Icon name="arrow-right" color="#fff" size={24} />
              </Text>
            </ButtonIcon>

            <ButtonText>Entrar</ButtonText>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default Home;
