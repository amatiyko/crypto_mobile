import React, { Component } from 'react';
import { Button } from 'react-native'; 

export default class CustomButton extends Component{
    handleClick = () => {
        console.log('123');
    }
    render() {
        return (
            <Button
                onPress={this.handleClick}
                title="Show More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            /> 
        )
    }
}