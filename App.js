import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'

import { Store } from './src/Store';
import { Header, CryptoContainer } from './src/components';

console.log('================');
console.log('store', Store);
console.log('================');

export default class App extends Component {
  render() {
    return (
     <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}