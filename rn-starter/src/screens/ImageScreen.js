import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import the component we want to show several times
import ImageDetail from "../components/ImageDetail";

// use a View to satisfy returning a single root element
const ImageScreen = () => {
    return <View>
        <ImageDetail 
            title="Forest" 
            imageSource={require("../../assets/forest.jpg")} 
            score={9} />
        <ImageDetail 
            title="Beach" 
            imageSource={require("../../assets/beach.jpg")} 
            score={7} />
        <ImageDetail 
            title="Mountain" 
            imageSource={require("../../assets/mountain.jpg")} 
            score={10} />
    </View>;
};

const styles = StyleSheet.create({

});

// for use as a module to be imported elsewhere
export default ImageScreen;
