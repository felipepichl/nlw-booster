import React from 'react';
import { ScrollView } from 'react-native';

import { categories } from '../../utils/categories';

import { Category } from '../Category';

import { styles } from './styles';

interface CategorySelectProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasChackBox?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  categorySelected,
  setCategory,
  hasChackBox = false,
}) => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasChackBox={hasChackBox}
        />
      ))}
    </ScrollView>
  );
};

export { CategorySelect };
