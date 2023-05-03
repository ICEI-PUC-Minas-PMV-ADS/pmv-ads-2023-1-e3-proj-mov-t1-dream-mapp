import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Objetivo from '../components/Objetivo';

const HomePage = ({ navigation }) => {
  const tasks = [
    { id: 1, title: 'Objetivo #01', description: 'Descrição do objetivo #01', percentage: 60, completed: false },
    { id: 2, title: 'Objetivo #02', description: 'Descrição do objetivo #02', percentage: 30, completed: false },
    { id: 3, title: 'Objetivo #03', description: 'Descrição do objetivo #03', percentage: 100, completed: true },
    { id: 4, title: 'Objetivo #04', description: 'Descrição do objetivo #04', percentage: 50, completed: false },
    { id: 5, title: 'Objetivo #05', description: 'Descrição do objetivo #05', percentage: 80, completed: true },
    { id: 6, title: 'Objetivo #06', description: 'Descrição do objetivo #06', percentage: 10, completed: true },
    { id: 7, title: 'Objetivo #07', description: 'Descrição do objetivo #07', percentage: 70, completed: false },
    { id: 8, title: 'Objetivo #08', description: 'Descrição do objetivo #08', percentage: 90, completed: true },
    { id: 9, title: 'Objetivo #09', description: 'Descrição do objetivo #09', percentage: 20, completed: false },
    { id: 10, title: 'Objetivo #10', description: 'Descrição do objetivo #10', percentage: 40, completed: true },
    { id: 11, title: 'Objetivo #11', description: 'Descrição do objetivo #11', percentage: 0, completed: false },
    { id: 12, title: 'Objetivo #12', description: 'Descrição do objetivo #12', percentage: 100, completed: true },
    { id: 13, title: 'Objetivo #13', description: 'Descrição do objetivo #13', percentage: 10, completed: false },
    { id: 14, title: 'Objetivo #14', description: 'Descrição do objetivo #14', percentage: 90, completed: true },
    { id: 15, title: 'Objetivo #15', description: 'Descrição do objetivo #15', percentage: 50, completed: false },
  ];

  const renderItem = ({ item }) => (
    <Objetivo 
      title={item.title} 
      description={item.description} 
      percentage={item.percentage} 
      completed={item.completed} 
      onEditPress={() => console.log('Editar objetivo')} 
      onCompletePress={() => console.log('Concluir objetivo')}
    />
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <Text style={styles.subtitle}>Objetivos</Text>
      <FlatList
        style={styles.tasklist}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}/>
      <MenuGlobal></MenuGlobal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#5F5FC2',
    paddingTop: 10,
  },
  tasklist: {
    flex: 1,
    marginTop: 10,
    width: '100%',
  },
  task: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
  },
    backButton: {
    alignSelf: "flex-start"
  },
    dream: {
    marginBottom: 10
  }
  });

export default HomePage;
