import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';

import {
  Container,
  Title,
  Label,
  Input,
  ImagesInput,
  SwitchContainer,
  NextButton,
  NextButtonText,
  UploadedImagesContainer,
  UploadedImage,
} from './styles';

interface IOrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  };
}

const OrphanageData: React.FC = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const navigaton = useNavigation();
  const route = useRoute();
  const params = route.params as IOrphanageDataRouteParams;

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index) => {
      data.append('images', {
        name: `imgae_${index}.jpg`,
        type: 'images/jpg',
        uri: image,
      } as any);
    });

    await api.post('orphanages', data);

    navigaton.navigate('OrphanageMap');
  }

  async function handleImagePicker() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos da acesso à suas fotos');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;
    setImages([...images, image]);
  }

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input value={name} onChangeText={text => setName(text)} />

      <Label>Sobre</Label>
      <Input
        style={{ height: 110 }}
        textAlignVertical="top"
        multiline
        value={about}
        onChangeText={text => setAbout(text)}
      />

      {/* <Label>WhatsApp</Label>
      <Input /> */}

      <Label>Fotos</Label>

      <UploadedImagesContainer>
        {images.map(image => (
          <UploadedImage key={image} source={{ uri: image }} />
        ))}
      </UploadedImagesContainer>

      <ImagesInput onPress={handleImagePicker}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={{ height: 110 }}
        multiline
        textAlignVertical="top"
        value={instructions}
        onChangeText={text => setInstructions(text)}
      />

      <Label>Horário de visita</Label>
      <Input value={opening_hours} onChangeText={setOpeningHours} />

      <SwitchContainer>
        <Label>Atende final de Semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>
      <NextButton onPress={handleCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default OrphanageData;
