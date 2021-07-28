import { registerRootComponent } from 'expo';
import React from 'react';

import { Welcome } from '../pages/Welcome';

const App: React.FC = () => {
  return <Welcome />;
};

registerRootComponent(App);

export default App;
