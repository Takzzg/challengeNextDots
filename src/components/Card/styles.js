import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 100 / 2,
  },
  text: {
    flex: 1,
    margin: 5,
    fontSize: 20,
    color: 'rgba(0,0,0,0.7)',
  },
});

export default styles;
