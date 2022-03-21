import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
};

export { App };
