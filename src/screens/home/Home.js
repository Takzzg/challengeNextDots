import React from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, ActivityIndicator, View } from 'react-native';
import CustomGradient from '../../components/CustomGradient';
import { goBack } from '../../navigation/Navigation';
import { fetchCocktails, cleanCocktailsHandler } from '../../actions/cocktails';
import { Button, MyTextInput, Card } from '../../components';
import styles from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      localLoading: false,
    };
  }

  render() {
    const {
      cocktails,
      fetchCocktailsError,
      fetchCocktailsIsLoading,
      fetchCocktailsConnected,
      cleanCocktailsConnected,
    } = this.props;
    const { inputText, localLoading } = this.state;

    const changeTextHandler = newText => {
      let fetchCocktailsHandler;
      this.setState({ inputText: newText, localLoading: true }, () => {
        clearTimeout(fetchCocktailsHandler);
        cleanCocktailsConnected();
        if (newText.length >= 3)
          fetchCocktailsHandler = setTimeout(() => {
            fetchCocktailsConnected(newText);
            this.setState({ localLoading: false });
          }, 2000);
        else this.setState({ localLoading: false });
      });
    };

    const cancelButtonHandler = () => {
      return this.setState({ inputText: '' });
    };

    return (
      <CustomGradient style={styles.container}>
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
            // returnKeyType="search"
          />

          {inputText.length > 0 ? (
            <Button
              onPress={cancelButtonHandler}
              text="Cancel"
              textStyle={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}
              onEndEditing={styles.cancelButton}
            />
          ) : null}
        </View>

        <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.center}>
          {fetchCocktailsIsLoading || localLoading ? (
            <ActivityIndicator color="black" size="large" />
          ) : cocktails && cocktails.drinks !== null ? (
            cocktails.drinks.map(cocktail => (
              <Card
                cocktailName={cocktail.strDrink}
                cocktailImage={cocktail.strDrinkThumb}
                key={cocktail.idDrink}
              />
            ))
          ) : null}

          <View style={{ margin: 5 }} />

          {fetchCocktailsError ? (
            <Text style={{ color: 'red' }}>{JSON.stringify(fetchCocktailsError, null, 2)}</Text>
          ) : null}
        </ScrollView>
      </CustomGradient>
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
  cleanCocktailsConnected: () => dispatch(cleanCocktailsHandler()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
