import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles';

const CategorySelect: React.FC = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 40 }}
    />
  );
};

export { CategorySelect };
