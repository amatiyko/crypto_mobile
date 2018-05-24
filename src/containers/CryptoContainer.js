import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FetchCoinData from "./../Actions/FetchCoinData";
import ShowMore from "./../Actions/ShowMore"
import { SHOW_MORE } from './../utils/ActionTypes'
import { CoinItem, CustomButton } from "./../components";

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
            let { crypto , app } = this.props;
            let data = crypto.data.slice(0, app.itemsToShow);
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
                    <CustomButton handleClick={this.props.ShowMore}/>
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
        crypto: state.crypto,
        app: state.app
    }
}

export default connect(mapStateToProps, { FetchCoinData, ShowMore })(CryptoContainer)