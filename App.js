import React, { PureComponent } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { setTopLevelNavigator } from './src/navigation/Navigation';

export default class App extends PureComponent {
  render() {
    return <AppNavigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />;
  }
}
