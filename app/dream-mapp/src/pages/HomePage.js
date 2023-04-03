import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

export default class HomePage extends Component {
  state = {
    tasks: [
      { id: 1, title: 'Objetivo #01', completed: false },
      { id: 2, title: 'Objetivo #02', completed: false },
      { id: 3, title: 'Objetivo #03', completed: true },
      { id: 4, title: 'Objetivo #04', completed: false },
      { id: 5, title: 'Objetivo #05', completed: true },
      { id: 6, title: 'Objetivo #06', completed: true },
      { id: 7, title: 'Objetivo #07', completed: false },
      { id: 8, title: 'Objetivo #08', completed: true },
      { id: 9, title: 'Objetivo #09', completed: false },
      { id: 10, title: 'Objetivo #10', completed: true },
      { id: 11, title: 'Objetivo #11', completed: false },
      { id: 12, title: 'Objetivo #12', completed: true },
      { id: 13, title: 'Objetivo #13', completed: false },
      { id: 14, title: 'Objetivo #14', completed: true },
      { id: 15, title: 'Objetivo #15', completed: false },
    ]
  }

  renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Avatar
        size="medium"
        title={item.completed ? 'C' : 'I'}
        containerStyle={{ backgroundColor: item.completed ? 'green' : 'red' }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.task}>{item.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Lista de objetivos</Text>
        <FlatList
          style={styles.tasklist}
          data={this.state.tasks}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: '#6b3fa0',
    fontSize: 34,
    marginBottom: 10,
  },
  subtitle: {
    color: '#6b3fa0',
    fontSize: 25,
    marginBottom: 10,
  },
  tasklist: {
    flex: 1,
    marginTop: 10,
  },
  task: {
    fontSize: 18,
    fontWeight: '500',
  },
});
