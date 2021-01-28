import React, { useState } from 'react';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { useNavigation } from '@react-navigation/native';
import { Container, MapContainer, NextButton, NextButtonText } from './styles';

import mapMarker from '../../assets/map-marker.png';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position });
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  return (
    <Container>
      <MapContainer>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -30.1084638,
            longitude: -51.3159522,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          onPress={handleSelectMapPosition}
        >
          {position.latitude !== 0 && (
            <Marker
              icon={mapMarker}
              calloutAnchor={{
                x: 3.4,
                y: 0.85,
              }}
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
            />
          )}
        </MapView>
      </MapContainer>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
