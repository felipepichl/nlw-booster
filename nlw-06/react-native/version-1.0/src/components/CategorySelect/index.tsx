import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories';

import { styles } from './styles';

const CategorySelect: React.FC = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 40 }}
    >
      {
        categories.map(category => (

        ))
      }
    </ScrollView>
  );
};

export { CategorySelect };
