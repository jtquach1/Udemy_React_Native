import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // price === '$' | '$$' | '$$$'
        // Pass a predicate lambda that checks whether the input result
        // price is equal to the parent desired price
        // Go through every restaurant/business object inside results
        return results.filter(result => {
            // And return the object in a new results set
            // if this statement evals to true
            return result.price === price;
        });
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>

            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!" />

        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
