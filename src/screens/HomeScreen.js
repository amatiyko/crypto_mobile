import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home screen</Text>
                <Button
                    title="Show Currencies"
                    onPress={() => this.props.navigation.navigate('Currencies')} 
                />
            </View>
        );
    }
}