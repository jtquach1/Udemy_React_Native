import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
// make use of yelp instance to do network requests
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // results is an array
    // we expect results to have a big array of objects that contains
    // all the diff results got back from the Yelp API
    // THIS represents businesses array from the Businesses Search Endpoint
    const [results, setResults] = useState([]);
    // helper function
    const searchApi = async () => {
        // the route will be concatenated to baseURL
        const response = await yelp.get('/search', {
            // concatenates parameters to query string to access Yelp API
            params: {
                limit: 50,
                // same as doing term: term
                // ES2015 syntax: since the key and value are identical
                term,
                // city in California
                location: 'san jose',
            },
        });
        // response.data is the whole {"total": ..., "businesses": ..., "region": ...} object
        // response.data.businesses gets ["rating": ..., "price": ..., "phone": ..., ...] value from key businesses  
        setResults(response.data.businesses);
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                // since we are taking in some or no arguments and directly passing it to the function call,
                // we can shorten the callbacks in the props to the reference of the function we want to call
                onTermChange={setTerm} 
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results.</Text>

        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
