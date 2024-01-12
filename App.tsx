import {colors} from './app/config';
import {StatusBar} from 'react-native';
import React, {Component} from 'react';
import {MainNavigationContainer} from './app/navigation';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './app/Redux/store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={colors.white} />
        <MainNavigationContainer />
      </Provider>
    );
  }
}

export default App;