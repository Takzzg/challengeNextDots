import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Welcome, Home } from '../screens';
import { HOME, WELCOME } from './allRoutes';

const navigationOptions = {
  navigationOptions: { header: null },
};

export default createAppContainer(
  createStackNavigator({
    [WELCOME]: {
      screen: Welcome,
      ...navigationOptions,
    },
    [HOME]: {
      screen: Home,
      ...navigationOptions,
    },
  }),
);
