import React from 'react';
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

function Button(props) {
  const { buttonStyle, text, onPress, textStyle } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ ...styles.button, ...buttonStyle }} onPress={onPress}>
        <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
