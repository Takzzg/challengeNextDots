import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { goBack } from '../../navigation/Navigation';
import { fetchCocktails } from '../../actions/cocktails';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 20,
    backgroundColor: '#00000070',
  },
  buttonText: {
    color: 'white',
  },
  spacing: {
    height: 10,
  },
});

class Home extends React.Component {
  render() {
    const {
      cocktails,
      fetchCocktailsError,
      fetchCocktailsIsLoading,
      fetchCocktailsConnected,
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text>Home</Text>
        <View style={styles.spacing} />
        <TouchableOpacity onPress={() => goBack()} style={styles.button}>
          <Text style={styles.buttonText}>Go back ahrecrazy</Text>
        </TouchableOpacity>

        <View style={styles.spacing} />

        {fetchCocktailsIsLoading ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <TouchableOpacity onPress={fetchCocktailsConnected} style={styles.button}>
            <Text style={styles.buttonText}>Fetch cocktails</Text>
          </TouchableOpacity>
        )}

        <View style={styles.spacing} />

        {cocktails ? <Text>{JSON.stringify(cocktails, null, 2)}</Text> : null}
        {fetchCocktailsError ? (
          <Text style={{ color: 'red' }}>{JSON.stringify(fetchCocktailsError, null, 2)}</Text>
        ) : null}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails.cocktails,
  fetchCocktailsError: state.cocktails.fetchCocktailsError,
  fetchCocktailsIsLoading: state.cocktails.fetchCocktailsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktailsConnected: () => dispatch(fetchCocktails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
