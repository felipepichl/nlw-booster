import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { View } from 'react-native';
import { Container, Title, BackButton } from './styles';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const { goBack, navigate } = useNavigation();

  function handleNavigateToGoBack() {
    goBack();
  }

  function handleNavigateToHomeApp() {
    navigate('OrphanagesMap');
  }

  return (
    <Container>
      <BackButton onPress={handleNavigateToGoBack}>
        <Feather name="arrow-left" size={24} color="#15b5d6" />
      </BackButton>

      <Title>{title}</Title>

      {showCancel ? (
        <BackButton onPress={handleNavigateToHomeApp}>
          <Feather name="x" size={24} color="#ff669d" />
        </BackButton>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Header;
