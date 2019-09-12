import React from 'react';
import { Text, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { goToPage } from '../../navigation/Navigation';
import { HOME } from '../../navigation/allRoutes';
import { Button } from '../../components';
import styles from './styles';
import CustomGradient from '../../components/CustomGradient';

class Welcome extends React.Component {
  render() {
    return (
      <CustomGradient style={styles.container}>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.4)" translucent />
        <View style={styles.textContainer}>
          <Icon name="cocktail" size={70} color="white" />
          <Text style={styles.text}>
            <Text style={styles.innerText}>Cocktail</Text>Finder
          </Text>
          <View style={{ margin: 5 }} />
        </View>
        <Button
          onPress={() => goToPage(HOME)}
          text="Serach your favourite cocktail"
          containerStyle={{ backgroundColor: 'white' }}
          textContainerStyle={{ flex: 1 }}
          icon={{ iconName: 'search', iconColor: 'grey' }}
        />
      </CustomGradient>
    );
  }
}

export default Welcome;
