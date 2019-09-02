import { API_URL } from '../../config';

export default class CocktailsConfig {
  static get endpoint() {
    return `${API_URL}`;
  }

  static get random() {
    return `${CocktailsConfig.endpoint}random.php`;
  }
}
