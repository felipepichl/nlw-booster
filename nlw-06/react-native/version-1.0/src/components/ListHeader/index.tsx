import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

interface ListHeaderProps {
  title: string;
  subTitle: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};

export { ListHeader };
