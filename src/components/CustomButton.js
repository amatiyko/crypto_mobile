import React, { Component } from 'react';
import { Button } from 'react-native'; 

export default class CustomButton extends Component{
    render() {
        console.log('custom btn props',this.props);
        return (
            <Button
                onPress={this.props.handleClick}
                title="Show More"
            /> 
        )
    }
}