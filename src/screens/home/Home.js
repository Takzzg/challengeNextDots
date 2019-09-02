import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { goBack } from '../../navigation/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#00000070',
  },
  buttonText: {
    color: 'white',
  },
  spacing: {
    height: 10,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.spacing} />
      <TouchableOpacity onPress={() => goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go back ahrecrazy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
