import { registerRootComponent } from 'expo';
import React from 'react';

import { SignIn} from '../screens/SignIn'

const App: React.FC = () => {
  return (
    <SignIn/>
  );
};

registerRootComponent(App);

export default App;
