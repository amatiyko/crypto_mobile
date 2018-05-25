import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import CurrenciesScreen from './CurrenciesScreen';

export const RookStack = createStackNavigator(
    {
        Home: HomeScreen,
        Currencies: {
            screen: CurrenciesScreen, 
            navigationOptions: {
                title: "Crypto Currencies"
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
);