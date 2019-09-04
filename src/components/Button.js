import React from 'react';
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    padding: 20,
    backgroundColor: '#00000070',
  },
  buttonText: {
    color: 'white',
  },
});

const Button = ({ buttonStyle, text, onPress, textStyle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.button, ...buttonStyle }} onPress={onPress}>
        <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Button.defaultProps = {
  text: 'Boton'
}

export default Button;
