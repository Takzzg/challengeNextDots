import { handleActions } from 'redux-actions';
import {
  fetchCocktailsStart,
  fetchCocktailsSuccess,
  fetchCocktailsError,
} from '../../actions/cocktails';

const CocktailsInitialState = {
  cocktails: null,
  fetchCocktailsIsLoading: false,
  fetchCocktailsError: null,
};

export default handleActions(
  {
    [fetchCocktailsStart]: state => ({
      ...state,
      fetchCocktailsIsLoading: true,
      fetchCocktailsError: null,
    }),
    [fetchCocktailsSuccess]: (state, action) => ({
      ...state,
      cocktails: action.payload,
      fetchCocktailsIsLoading: false,
    }),
    [fetchCocktailsError]: (state, action) => ({
      ...state,
      fetchCocktailsError: action.payload,
      fetchCocktailsIsLoading: false,
    }),
  },
  CocktailsInitialState,
);
