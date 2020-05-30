import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
    },
    viewOneStyle: {
        backgroundColor: 'red',
        flex: 1,
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        flex: 1,
        top: 100,
    },
    viewThreeStyle: {
        backgroundColor: 'purple',
        flex: 1,
    },
});

export default BoxScreen;