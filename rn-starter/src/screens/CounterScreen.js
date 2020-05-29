import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        // probably don't need to switch on type, but good to do
        // use ...state for convention
        case 'increase':
            return {...state, counter: state.counter + action.payload};
        case 'decrease':
            return {...state, counter: state.counter + action.payload};
        default:
            return state
    }
};

const CounterScreen = () => {
    // init state to { counter: 0 }
    // dispatch calls reducer with the state and supplied action
    // dispatch => useReducer => reducer 
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    // get counter from the state
    const { counter } = state;

    // can specify payload here
    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({ type: 'increase', payload: +1 });
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({ type: 'decrease', payload: -1 });
            }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ });

export default CounterScreen;