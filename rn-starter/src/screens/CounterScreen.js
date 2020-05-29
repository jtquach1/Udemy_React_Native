import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// action => howToChangeState
const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }
    // We don't really need a payload since the count only goes up or down by 1
    // But using that prop is good if you want to use something other than 1
    switch (action.type) {
        case 'increment':
            // ...state takes all diff curr values of the state and put into new object
            // overwrite count with new value here
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        // Don't make change to state
        default:
            return state
    }
};

const CounterScreen = () => {
    // Destructure two values that get returned from calling useReducer
    // dispatch calls reducer
    // NOTE: we don't have to store state in {}. Can use [] or 0. 
    // However if you're using useReducer you should use {}, assumed you 
    // have multiple diff properties to keep track of
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => {
                // pass action object to dispatch
                dispatch({ type: 'increment', payload: 1 });
            }}/>
            <Button title="Decrease" onPress={() => {
                // assume payload is always positive
                dispatch({ type: 'decrement', payload: 1 });
            }}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({ });

export default CounterScreen;