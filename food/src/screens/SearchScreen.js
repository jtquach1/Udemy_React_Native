import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    // term will be used to search the Yelp API
    // default value of empty string
    // piece of state managed by SearchScreen
    const [term, setTerm] = useState('');

    // every time the term changes, call setTerm with argument newTerm
    // pass PoS and way to change it to SearchBar
    return (
        <View>
            <SearchBar term={term} onTermChange={(newTerm) => setTerm(newTerm)} />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
