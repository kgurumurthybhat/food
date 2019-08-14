import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);

    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    //Below code is to make sure the getResult is called only once!
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    };
    
    console.log(result);

    return (
        <>
            <Text style={{fontSize: 18, alignSelf: 'center', margin: 10}}>{result.name}</Text>
            <ScrollView>
                <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.imageStyle} source={{uri: item}}/>
                }} 
                
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 200,
        width: 300,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;