import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import ContPorcentagem from './ContPorcentagem';

function Objetivo({ title, description, percentage, onEditPress, onCompletePress, progressSize = 50 }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ width: progressSize, height: progressSize }}>
      <ContPorcentagem percentage={percentage || 0} size={progressSize} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="edit"
          type="font-awesome"
          color="#fff"
          onPress={onEditPress}
          containerStyle={{ marginRight: 10 }}
        />
        <Icon
          name="check"
          type="font-awesome"
          color="#fff"
          onPress={onCompletePress}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#A8A8F4',
    padding: 10,
    borderRadius: 30,
    marginVertical: 4,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Objetivo;
