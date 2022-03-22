import React from 'react';

import GlobalStyles from './styles/global';

import Routes from './routes';

import { AuthContextProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <Routes />
    </AuthContextProvider>
  );
};

export { App };
