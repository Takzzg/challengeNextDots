import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Card = ({ cocktailImage, cocktailName }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: cocktailImage }} />
    <Text style={styles.text}>{cocktailName}</Text>
  </View>
);

Card.propTypes = {
  cocktailImage: PropTypes.string.isRequired,
  cocktailName: PropTypes.string.isRequired,
};

export default Card;
