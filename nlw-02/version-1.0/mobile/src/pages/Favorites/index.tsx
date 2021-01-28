import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  const [favorities, setFavorities] = useState<Teacher[]>([]);

  useFocusEffect(() => {
    loadFavorites();
  });

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response);
        
        setFavorities(favoritedTeachers)
      }
    })
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorities.map(teacher => (
          <TeacherItem 
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        ))}
      </ScrollView>
    </View>

    
  );
}

export default Favorites;