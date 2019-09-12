import React from 'react';
import { Text, StyleSheet, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { goToPage } from '../../navigation/Navigation';
import { HOME } from '../../navigation/allRoutes';
import Button from '../../components/Button/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
  innerText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

class Welcome extends React.Component {
  render() {
    return (
      <LinearGradient
        style={styles.container}
        colors={['#ff3300', '#ff1ac6']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.4)" translucent />
        <View style={styles.textContainer}>
          <Icon name="cocktail" size={70} color="white" />
          <Text style={styles.text}>
            <Text style={styles.innerText}>Cocktail</Text>Finder
          </Text>
        </View>
        <Button
          onPress={() => goToPage(HOME)}
          text="Serach your favourite cocktail"
          containerStyle={{ backgroundColor: 'white' }}
          textContainerStyle={{ flex: 1 }}
          icon={{ iconName: 'search', iconColor: 'grey' }}
        />
      </LinearGradient>
    );
  }
}

export default Welcome;
