import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
// PART 3: import the Hook we just created
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // destructure variables
    const [searchApi, results, errorMessage] = useResults();

    // PART 1: migrate all Yelp API related code to useResults.js

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>

        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
