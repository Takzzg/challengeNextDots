import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    margin: 5,
  },
  noResults: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.4)',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    margin: 5,
    alignSelf: 'center',
  },
});

export default styles;
