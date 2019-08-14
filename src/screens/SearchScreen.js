import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        //<View style={{flex: 1}}>
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onLocChange={newLoc => setLocation(newLoc)}
                onLocSubmit={() => searchApi(term, location)}
            />
            {errorMessage ? <Text style={{ margin: 20 }}>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost effective!"/>
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier "/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Heavy on pocket!"/>
            </ScrollView>

        </>
        //</View>
    );
};

const styles = StyleSheet.create({
});

export default SearchScreen;