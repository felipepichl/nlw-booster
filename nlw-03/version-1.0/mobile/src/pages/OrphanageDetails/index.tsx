import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { View, Linking } from 'react-native';
import api from '../../services/api';

import mapMarkerImg from '../../assets/map-marker.png';

import {
  Container,
  Description,
  DetailsContainer,
  Image,
  ImagesContainer,
  MapContainer,
  Map,
  Title,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  ScheduleText,
  ScheduleTextBlue,
  ScheduleTextGreen,
  ScheduleTextRed,
  ContactButton,
  ContactButtonText,
} from './styles';

interface IOrphanageDetailsRouteParams {
  id: number;
}

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

const OrphanageDetails: React.FC = () => {
  const [orphanage, setOrphanage] = useState<IOrphanage>();
  const route = useRoute();

  const params = route.params as IOrphanageDetailsRouteParams;

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <View />;
  }

  function handleOpenGoogleMapsRoute() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude}, ${orphanage?.longitude}`,
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {orphanage.images.map(image => (
            <Image
              key={image.id}
              source={{
                uri: image.url,
              }}
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </Map>
          <RoutesContainer onPress={handleOpenGoogleMapsRoute}>
            <RoutesText>Ver Rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText>
              <ScheduleTextBlue>
                {`De Segunda à Sexta ${orphanage.opening_hours}`}
              </ScheduleTextBlue>
            </ScheduleText>
          </ScheduleItemBlue>

          {orphanage.open_on_weekends ? (
            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleText>
                <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
              </ScheduleText>
            </ScheduleItemGreen>
          ) : (
            <ScheduleItemRed>
              <Feather name="info" size={40} color="#ff669d" />
              <ScheduleText>
                <ScheduleTextRed>Não atendemos fim de semana</ScheduleTextRed>
              </ScheduleText>
            </ScheduleItemRed>
          )}
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
