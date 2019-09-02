import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { setTopLevelNavigator } from './src/navigation/Navigation';
import { store } from './src/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />
      </Provider>
    );
  }
}
