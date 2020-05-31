import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // for the text input and icon to show inside
    background: {
        // can specify color: 'white', 'rgb(255,255,255)', or '#fff'
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    }
});

export default SearchBar;
