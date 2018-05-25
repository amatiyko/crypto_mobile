import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'

import { Store } from './src/Store';
import { Header } from './src/components';
import { CryptoContainer } from './src/containers'
import { RookStack } from './src/screens';

export default class App extends Component {
  render() {
    return(
      <Provider store={Store}>
        <RookStack />
      </Provider>
    );
  }
}
// export default class App extends Component {
//   render() {
//     return (
//      <Provider store={Store}>
//         <View>
//           <Header />
//           <CryptoContainer />
//         </View>
//       </Provider>
//     );
//   }
// }