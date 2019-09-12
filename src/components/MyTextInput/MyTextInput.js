import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

class MyTextInput extends React.Component {
  render() {
    const { containerStyle, icon, ...props } = this.props;

    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        {icon ? <Icon name="search" size={15} color="grey" style={styles.icon} /> : null}
        <TextInput {...props} style={styles.textInput} />
      </View>
    );
  }
}

MyTextInput.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.bool,
};

MyTextInput.defaultProps = {
  containerStyle: {},
  icon: false,
};

export default MyTextInput;
