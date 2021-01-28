/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import PrimaryButton from '../../components/PrimaryButton';
import Map from '../../components/Map';
import happyMapIcon from '../../components/Map/happyMapIcon';

import {
  Container,
  MapContainer,
  InputBlock,
  ImagesContainer,
  ButtonSelect,
} from './styles';

const CreateOrphanage: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [activeBlur, setActiveBlur] = useState(true);

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  function LocationMarker() {
    const map = useMapEvents({
      click(e: LeafletMouseEvent) {
        if (position.latitude === 0) {
          map.locate();
        }

        const { lat, lng } = e.latlng;

        setPosition({
          latitude: lat,
          longitude: lng,
        });

        setActiveBlur(false);
      },
      locationfound(event) {
        const { lat, lng } = event.latlng;

        setPosition({
          latitude: lat,
          longitude: lng,
        });

        map.flyTo(event.latlng, map.getZoom());
      },
    });

    return (
      <Marker
        interactive={false}
        icon={happyMapIcon}
        position={[position.latitude, position.longitude]}
      />
    );
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(ActualPosition => {
      const { latitude, longitude } = ActualPosition.coords;

      setInitialPosition({
        latitude,
        longitude,
      });
    });
  }, []);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    const seletedImages = Array.from(event.target.files);

    setImages(seletedImages);

    const seletedImagesPreview = seletedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(seletedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('orphanages', data);

    // eslint-disable-next-line no-alert
    alert('Cadastro realizado o sucesso');

    history.push('/app');
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>
            <MapContainer>
              <Map
                style={
                  activeBlur === false
                    ? { filter: 'blur()', height: 280 }
                    : { height: 280 }
                }
                center={[initialPosition.latitude, initialPosition.longitude]}
                zoom={15}
              >
                {/* <LocationMarker />/ */}
              </Map>
            </MapContainer>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>
              <ImagesContainer>
                {previewImages.map(image => {
                  return <img key={image} src={image} alt={name} />;
                })}

                <label htmlFor="images[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

                <input
                  multiple
                  onChange={handleSelectImages}
                  type="file"
                  id="images[]"
                />
              </ImagesContainer>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>
              <ButtonSelect>
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <PrimaryButton type="submit">Confirmar</PrimaryButton>
        </form>
      </main>
    </Container>
  );
};

export default CreateOrphanage;
