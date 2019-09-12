import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const CustomGradient = ({ children, style, ...props }) => (
  <LinearGradient
    style={{ ...styles.container, ...style }}
    colors={['#ff3300', '#ff1ac6']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0 }}
    {...props}
  >
    {children}
  </LinearGradient>
);

export default CustomGradient;
