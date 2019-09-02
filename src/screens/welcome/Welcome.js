import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { goToPage } from '../../navigation/Navigation';
import { HOME } from '../../navigation/allRoutes';

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

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <View style={styles.spacing} />
        <TouchableOpacity onPress={() => goToPage(HOME)} style={styles.button}>
          <Text style={styles.buttonText}>Go to home ahreloco</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Welcome;
