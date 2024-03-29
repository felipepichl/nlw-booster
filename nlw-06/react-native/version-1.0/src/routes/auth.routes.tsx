import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../screens/Home';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100,
      },
    }}
  >
    <Screen name="SignIn" component={SignIn} />

    <Screen name="Home" component={Home} />
    <Screen name="AppointmentDetails" component={AppointmentDetails} />
    <Screen name="AppointmentCreate" component={AppointmentCreate} />
  </Navigator>
);

export { AuthRoutes };
