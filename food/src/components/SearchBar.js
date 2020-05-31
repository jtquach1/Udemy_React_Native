import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import the icon library
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    // pass the name as a prop
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} color="black" />
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    }
});

export default SearchBar;
