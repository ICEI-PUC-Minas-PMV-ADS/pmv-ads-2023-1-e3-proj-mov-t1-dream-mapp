import { View, Text } from 'react-native';
import { SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import {Image} from 'react-native';

const ProfilePage = () => {
  const chartData = {
    labels: ['Concluídos', 'Em aberto', 'Removidos'],
    data: [0.6, 0.2, 0.2],
  };
  const myImage = require('../assets/image.png');
  const achievements = [
    {
      name: 'Conquista 1',
      description: 'Descrição da conquista 1',
    },
    {
      name: 'Conquista 2',
      description: 'Descrição da conquista 2',
    },
    {
      name: 'Conquista 3',
      description: 'Descrição da conquista 3',
    },
  ];

  return (
    <View style={styles.container}>
      <Image
        source={myImage}
        style={styles.profilePicture}
      />
      <Text style={styles.profileName}>Nome do Usuário</Text>
      <ProgressChart
        data={chartData}
        width={250}
        height={150}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(20, 50, 300, ${opacity})`,
        }}
        style={styles.chart}
      />
      <Text style={styles.achievementsTitle}>Últimas Conquistas:</Text>
      {achievements.map((achievement) => (
        <View key={achievement.name} style={styles.achievement}>
          <Text style={styles.achievementName}>{achievement.name}</Text>
          <Text style={styles.achievementDescription}>
            {achievement.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chart: {
    marginTop: 20,
    marginBottom: 20,
  },
  achievementsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  achievement: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    width: 300
  },
  achievementName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  achievementDescription: {
    fontSize: 13,
  },
});

export default ProfilePage;