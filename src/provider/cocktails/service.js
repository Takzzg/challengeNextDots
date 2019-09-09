import CocktailsConfig from './config';

export default class CocktailsService {
  static fetchCocktails(name) {
    return new Promise((resolve, reject) => {
      const endpoint = CocktailsConfig.byName(name);
      fetch(endpoint)
        .then(response => {
          if (!response.ok) reject(response);
          return response.json();
        })
        .then(parsedJson => {
          resolve(parsedJson);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
