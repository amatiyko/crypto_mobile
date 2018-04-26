import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={headerContainer}> 
                <Text style={headerText}>Crypto app</Text>
            </View>       
        )
    }
}

const Styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 30
    },
    headerText: {
        fontSize: 20
    }
})

const { headerContainer, headerText } = Styles;