import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailImage: '',
      cocktailName: '',
    };
  }

  render() {
    const { cocktailImage, cocktailName } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: cocktailImage }} />
        <Text style={styles.text}>{cocktailName}</Text>
      </View>
    );
  }
}

export default Card;
