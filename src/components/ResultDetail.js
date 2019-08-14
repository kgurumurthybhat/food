import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View>
            <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={{marginTop: 10, marginLeft: 15}}>{result.rating} Stars, {result.review_count} Reviews!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        borderRadius: 5,
        height: 120,
        marginLeft:15
    },
    name: {
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 10
    },

});
export default ResultDetail;