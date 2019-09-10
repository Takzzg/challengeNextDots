import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const Button = ({
  text,
  onPress,
  iconStyle,
  textStyle,
  containerStyle,
  textContainerStyle,
  icon: { iconName = '', iconSize = 25, iconColor = 'black' },
}) => (
  <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...containerStyle }}>
    {iconName ? (
      <View style={{ ...styles.icon, ...iconStyle }}>
        <FontistoIcon size={iconSize} name={iconName} color={iconColor} />
      </View>
    ) : null}
    {text ? (
      <View style={{ ...styles.textContainer, ...textContainerStyle }}>
        <Text style={textStyle}>{text}</Text>
      </View>
    ) : null}
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.shape({
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
  }),
};

Button.defaultProps = {
  text: null,
  iconStyle: {},
  textStyle: {},
  containerStyle: {},
  textContainerStyle: {},
  icon: {},
};

export default Button;
