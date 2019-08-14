import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';

const SearchBar = ({ term, location, onTermChange, onLocSubmit, onLocChange }) => {
    return (
        <>
            <View style={styles.backgroundStyle}>
                <Feather name="search" style={styles.iconStyle} />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search"
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={term}
                    onChangeText={onTermChange}
                />
            </View>
            <View style={styles.backgroundStyle}>
                <Entypo name="location" style={styles.iconStyle} />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Where?"
                    autoCorrect={false}
                    autoCapitalize='none'
                    onEndEditing={onLocSubmit}
                    value={location}
                    onChangeText={onLocChange}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

});

export default SearchBar;