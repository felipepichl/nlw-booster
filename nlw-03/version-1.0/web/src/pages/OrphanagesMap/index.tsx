import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';

import mapMarkerImg from '../../assets/logo-marker.svg';

import happyMapIcon from '../../components/Map/happyMapIcon';

import { Container, ButtonCreateOrphanage } from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('/orphanages').then(response => setOrphanages(response.data));
  }, []);

  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escola um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Guaíba</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      {/* <MapContent /> */}

      <MapContainer
        center={[-30.1085608, -51.3153608]}
        zoom={20}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            position={[orphanage.latitude, orphanage.longitude]}
            icon={happyMapIcon}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxHeight={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <ButtonCreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </ButtonCreateOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
