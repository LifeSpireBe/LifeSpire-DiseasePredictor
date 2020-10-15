import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context } from '../context/AuthContext';


const PredictedDisease =()=>{

    const {state, predictDisease } =useContext(Context);
    console.log(state);
    return (
    <Text>{state}</Text>
    )
};

export default PredictedDisease;