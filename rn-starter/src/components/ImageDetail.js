import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// destructuring
// instead of using props just pull the props you need
// good to save keystrokes
const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

// for use as a module to be imported elsewhere
export default ImageDetail;
