import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Marker } from 'react-leaflet';

import api from '../../services/api';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
// import PrimaryButton from '../../components/PrimaryButton';

import happyMapIcon from '../../components/Map/happyMapIcon';

import {
  Container,
  OrphanageDetail,
  Images,
  OrphanageDetailContent,
  MapContainer,
  OpenDetail,
  Hour,
  OpenOnWeeknds,
} from './styles';

interface Orphanage {
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

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const { id } = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`/orphanages/${id}`).then(response => setOrphanage(response.data));
  }, [id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />
      <main>
        <OrphanageDetail>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => (
              <button
                key={image.id}
                className={activeImageIndex === index ? 'active' : ''}
                type="button"
                onClick={() => {
                  setActiveImageIndex(index);
                }}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </Images>

          <OrphanageDetailContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                interactive={false}
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
              >
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>
              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetail>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                {orphanage.opening_hours}
              </Hour>

              {orphanage.open_on_weekends ? (
                <OpenOnWeeknds>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos
                  <br />
                  fim de semana
                </OpenOnWeeknds>
              ) : (
                <OpenOnWeeknds className="dont-open">
                  <FiInfo size={32} color="#ff669d" />
                  Não Atendemos
                  <br />
                  fim de semana
                </OpenOnWeeknds>
              )}
            </OpenDetail>

            {/* <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton> */}
          </OrphanageDetailContent>
        </OrphanageDetail>
      </main>
    </Container>
  );
};

export default Orphanage;
