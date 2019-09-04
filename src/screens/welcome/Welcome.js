import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { goToPage } from '../../navigation/Navigation';
import { HOME } from '../../navigation/allRoutes';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button onPress={() => goToPage(HOME)} text="Go to home" />
      </View>
    );
  }
}

export default Welcome;
