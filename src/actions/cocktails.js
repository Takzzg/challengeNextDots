import { createAction } from 'redux-actions';
import {
  FETCH_COCKTAILS_START,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
  CLEAN_COCKTAILS,
} from './types';
import CocktailsService from '../provider/cocktails/service';

export const fetchCocktailsStart = createAction(FETCH_COCKTAILS_START);
export const fetchCocktailsSuccess = createAction(FETCH_COCKTAILS_SUCCESS, data => data);
export const fetchCocktailsError = createAction(FETCH_COCKTAILS_ERROR, error => error);
export const cleanCocktails = createAction(CLEAN_COCKTAILS);

export function fetchCocktails(name) {
  return async (dispatch, getState) => {
    try {
      const fetchIsLoading = getState().cocktails.fetchCocktailsIsLoading;

      if (!fetchIsLoading) {
        dispatch(fetchCocktailsStart());
        const response = await CocktailsService.fetchCocktails(name);
        dispatch(fetchCocktailsSuccess(response));
      }
    } catch (err) {
      dispatch(fetchCocktailsError(err));
    }
  };
}

export function cleanCocktailsHandler() {
  return async dispatch => {
    dispatch(cleanCocktails());
  };
}
