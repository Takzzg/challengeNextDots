import React from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, ActivityIndicator, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { goBack } from '../../navigation/Navigation';
import { fetchCocktails } from '../../actions/cocktails';
import Button from '../../components/Button/Button';
import MyTextInput from '../../components/MyTextInput/MyTextInput';
import Card from '../../components/Card/Card';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  render() {
    const {
      cocktails,
      fetchCocktailsError,
      fetchCocktailsIsLoading,
      fetchCocktailsConnected,
    } = this.props;
    const { inputText } = this.state;

    const changeTextHandler = newText => {
      if (newText.length >= 3) fetchCocktailsConnected(newText);
      this.setState({ inputText: newText });
    };

    const cancelButtonHandler = () => {
      return this.setState({ inputText: '' });
    };

    return (
      <LinearGradient
        style={styles.container}
        colors={['#ff3300', '#ff1ac6']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.searchContainer}>
          {!inputText.length > 0 ? (
            <Button
              onPress={() => goBack()}
              icon={{ iconName: 'arrow-left', iconColor: 'grey' }}
              containerStyle={styles.backArrow}
            />
          ) : null}

          <MyTextInput
            onChangeText={newText => changeTextHandler(newText)}
            value={inputText}
            containerStyle={styles.TextInput}
            placeholder="Search"
            icon
          />

          {inputText.length > 0 ? (
            <Button
              onPress={cancelButtonHandler}
              text="Cancel"
              textStyle={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}
              containerStyle={styles.cancelButton}
            />
          ) : null}
        </View>

        <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.center}>
          {fetchCocktailsIsLoading ? (
            <ActivityIndicator color="black" size="large" />
          ) : cocktails ? (
            cocktails.drinks.map(cocktail => (
              <Card
                cocktailName={cocktail.strDrink}
                cocktailImage={cocktail.strDrinkThumb}
                key={cocktail.idDrink}
              />
            ))
          ) : null}

          {fetchCocktailsError ? (
            <Text style={{ color: 'red' }}>{JSON.stringify(fetchCocktailsError, null, 2)}</Text>
          ) : null}
        </ScrollView>
      </LinearGradient>

      // <ScrollView style={styles.container} contentContainerStyle={styles.center}>
      //   <Text>Home</Text>
      //   <Button onPress={() => goBack()} text="Go back" />

      //   {fetchCocktailsIsLoading ? (
      //     <ActivityIndicator color="black" size="large" />
      //   ) : (
      //     <Button onPress={fetchCocktailsConnected} text="Fetch cocktails" />
      //   )}

      //   {cocktails ? <Text>{JSON.stringify(cocktails, null, 2)}</Text> : null}
      //   {fetchCocktailsError ? (
      //     <Text style={{ color: 'red' }}>{JSON.stringify(fetchCocktailsError, null, 2)}</Text>
      //   ) : null}
      // </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails.cocktails,
  fetchCocktailsError: state.cocktails.fetchCocktailsError,
  fetchCocktailsIsLoading: state.cocktails.fetchCocktailsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchCocktailsConnected: name => dispatch(fetchCocktails(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
