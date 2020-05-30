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
        height: 200,
    },
    viewOneStyle: {
        backgroundColor: 'red',
        width: 100,
        height: 100,
        right: 50,
    },
    viewTwoStyle: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        position: 'absolute',
        top: 100,
    },
    viewThreeStyle: {
        backgroundColor: 'purple',
        width: 100,
        height: 100,
        left: 50,
    },
});

export default BoxScreen;