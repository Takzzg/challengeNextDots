import React from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { goBack } from '../../navigation/Navigation';
import { fetchCocktails } from '../../actions/cocktails';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
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
      <ScrollView style={styles.container} contentContainerStyle={styles.center} >
        <Text>Home</Text>
        <Button onPress={() => goBack()} text="Go back" />

        {fetchCocktailsIsLoading ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <Button onPress={fetchCocktailsConnected} text="Fetch cocktails" />
        )}

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
