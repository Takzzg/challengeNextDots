import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Card = ({ cocktailImage, cocktailName }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: cocktailImage }} />
    <Text style={styles.text}>{cocktailName}</Text>
  </View>
);

export default Card;
