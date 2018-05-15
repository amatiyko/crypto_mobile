import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FetchCoinData from "./../Actions/FetchCoinData";
import CoinItem from "./CoinItem";

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
    }
});

class CryptoContainer extends Component {
    componentDidMount() {
        this.props.FetchCoinData();
    }
    
    render() {
        if (this.props.crypto.data) {
            let data = this.props.crypto.data;
            return (
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    {data.map((item, index) => {
                            return  (
                                <CoinItem 
                                    key={index}
                                    data={item}
                               />
                            )
                        }
                    )}
                </ScrollView>
            )
        } else {
            return (
                <View>Loading...</View>
            )
        }
        
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)