import React, { Component } from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image
} from "react-native";
import { images } from "./../utils/Constants"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: "#eee",
        borderBottomWidth: 3,
    },
    image : {
        width: 40,
        height: 40,
    },
    bold: {
        fontWeight: 'bold'
    },
    infoRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    symbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",        
    },
    name: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator: {
        marginTop: 10,
    },
    price: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",        
    },
    dollar: {
        fontWeight: "bold",
    },
    priceChangeRow: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'nowrap',
    },
    priceContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    changePeriod: {
        fontWeight: '100'
    },
    pricePlus: {
        color: 'green',
        fontWeight: 'bold',
    },
    priceMinus: {
        color: 'red',
        fontWeight: 'bold',
    }
});

class CoinItem extends Component {
    render() {
        let data = this.props.data;
        let { pricePlus, priceMinus } = styles
        return (
            <View style={styles.container}>

                <View style={styles.infoRow}>
                    <Image
                        style={styles.image}
                        source={{ uri: images[data.symbol] }}
                    />
                    <Text style={styles.symbol}>{data.symbol}</Text>
                    <Text style={styles.seperator}>|</Text>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.price}>{data.price_usd}
                        <Text style={styles.dollar}> $ </Text>
                    </Text>
                </View>
                

                <View style={styles.priceChangeRow}>
                    <View style={styles.priceContainer}>
                        <Text >1h:</Text>
                        <Text style={data.percent_change_1h < 0 ? priceMinus : pricePlus}>{data.percent_change_1h} %</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text>24h:</Text>
                        <Text style={data.percent_change_24h < 0 ? priceMinus : pricePlus}>{data.percent_change_24h} %</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text>7d:</Text>
                        <Text style={data.percent_change_7d < 0 ? priceMinus : pricePlus}>{data.percent_change_7d} %</Text>
                    </View>
                </View>
                

            </View>
        )
    }
}

export default CoinItem;