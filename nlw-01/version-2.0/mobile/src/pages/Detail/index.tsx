import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { TouchableOpacity, Linking, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

/* eslint-disable import/no-extraneous-dependencies */
import { Feather as Icon, FontAwesome } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Address,
  AddressContent,
  AddressTitle,
  Container,
  Content,
  PointImage,
  PointItems,
  PointName,
  Footer,
  Button,
  ButtonText,
} from './styles';

interface Params {
  point_id: number;
}

// interface Data {
//   point: {
//     name: string;
//     email: string;
//     whatsapp: string;
//     image_url: string;
//     city: string;
//     uf: string;
//   };
//   items: {
//     title: string;
//   }[];
// }

interface IPoint {
  name: string;
  email: string;
  whatsapp: string;
  image_url: string;
  city: string;
  uf: string;
  items: Array<{
    title: string;
  }>;
}

const Detail: React.FC = () => {
  const [point, setPoint] = useState<IPoint>();

  const { goBack } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    api.get(`points/${routeParams.point_id}`).then(response => {
      setPoint(response.data);
    });
  }, [routeParams]);

  function handleNavigateBack() {
    goBack();
  }

  function handleWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${point?.whatsapp}&text=Tenho interesse na coleta de resíduos`,
    );
  }

  function handleComposeMail() {
    if (!point) {
      return;
    }

    MailComposer.composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [point.email],
    });
  }

  if (!point) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" color="#34cb79" size={24} />
        </TouchableOpacity>

        <PointImage source={{ uri: point.image_url }} />
        <PointName>{point.name}</PointName>

        <PointItems>
          {point.items.map(item => item.title).join(', ')}
        </PointItems>

        <Address>
          <AddressTitle>Enedereço</AddressTitle>
          <AddressContent>
            {point.city}
            {', '}
            {point.uf}
          </AddressContent>
        </Address>
      </Content>

      <Footer>
        <Button onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={20} color="#fff" />
          <ButtonText>WhatsApp</ButtonText>
        </Button>

        <Button onPress={handleComposeMail}>
          <Icon name="mail" size={20} color="#fff" />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default Detail;
