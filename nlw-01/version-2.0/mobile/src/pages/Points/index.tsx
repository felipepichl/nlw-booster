import React, { useState, useEffect } from 'react';
import { Alert, TouchableOpacity, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';

/* eslint-disable import/no-extraneous-dependencies */
import { Feather as Icon } from '@expo/vector-icons';

import api from '../../services/api';

import {
  Container,
  Title,
  Description,
  MapContainer,
  Map,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
  ItemsContatiner,
  Item,
  ItemText,
} from './styles';

interface Item {
  id: number;
  title: string;
  url: string;
}

interface Point {
  id: number;
  name: string;
  image: string;
  url: string;
  latitude: number;
  longitude: number;
}

interface Params {
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSeletedItems] = useState<number[]>([]);

  const { goBack, navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Oooops...',
          'Precisamos de sua permissão para obter a localização',
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get('points', {
        params: {
          city: routeParams.city,
          uf: routeParams.uf,
          items: selectedItems,
        },
      })
      .then(response => {
        setPoints(response.data);
      });
  }, [selectedItems]);

  function handleNavigateBack() {
    goBack();
  }

  function handleNavigateToDetail(id: number) {
    navigate('Detail', { point_id: id });
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" color="#34cb79" size={24} />
        </TouchableOpacity>

        <Title>Bem-Vindo</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          {initialPosition[0] !== 0 && (
            <Map
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map(point => (
                <MapMarker
                  key={point.id}
                  onPress={() => handleNavigateToDetail(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage
                      style={{ resizeMode: 'cover' }}
                      source={{ uri: point.url }}
                    />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          )}
        </MapContainer>
      </Container>
      <ItemsContatiner>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map(item => (
            <Item key={String(item.id)} activeOpacity={0.6}>
              <SvgUri width={42} height={42} uri={item.url} />
              <ItemText>{item.title}</ItemText>
            </Item>
          ))}
        </ScrollView>
      </ItemsContatiner>
    </>
  );
};

export default Points;
