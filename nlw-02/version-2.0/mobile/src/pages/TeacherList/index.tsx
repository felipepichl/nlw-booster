import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput,  } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [teachers, setTeachears] = useState<Teacher[]>([]);
  const [favorities, setFavorities] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response => {
      if(response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id);
        
        setFavorities(favoritedTeachersIds)
      }
    })
  }

  function handleToogleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFiltersSubmit(){
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        week_day,
        subject,
        time,
      }
    });
    console.log(week_day, subject, time);
    
    console.log(response.data);
    
    setIsFilterVisible(false);
    setTeachears(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToogleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}
      >

        {isFilterVisible && (
          
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input}
              placeholder="Qual é a matéria"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={setSubject}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"  
                  value={week_day}
                  onChangeText={setWeekDay}
                />  
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Qual o horário?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={setTime}
                />  
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText} >Filtrar</Text>
            </RectButton>
          </View>
        )}

      </PageHeader>
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map(teacher => (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited={favorities.includes(teacher.id)}  
          />
        ))}
        
      </ScrollView>
    </View>
  );
}

export default TeacherList;