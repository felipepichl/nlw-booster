import React from 'react';
import {
  MapContainer as LeafletMap,
  MapContainerProps as LeafletMapProps,
  TileLayer,
} from 'react-leaflet';

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode;
}

const Map: React.FC<MapProps> = ({
  children,
  interactive = true,
  ...props
}) => {
  return (
    <LeafletMap
      center={[-27.2092052, -49.6401092]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {children}
    </LeafletMap>
  );
};

export default Map;
