import React from 'react';

import GlobalStyles from './styles/global';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
