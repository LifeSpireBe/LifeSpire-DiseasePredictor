import React, { useState,useContext, useEffect } from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Button, Text, Input } from 'react-native-elements';
//import Spacer from '../components/Spacer';
import { ScrollView } from 'react-native-gesture-handler';
//import trackerApi from '../api/tracker';
import { Context as DiseasePred} from '../context/AuthContext';
import DiseaseForm from '../components/DiseaseForm';


const DiseaseScreen =({navigation})=>{

    const { predictDisease, disease }= useContext(DiseasePred);
    //console.log(disease);
/*
    useEffect(()=>{
      predictDisease();

      const listener=navigation.addListener('didFocus',()=>{
        predictDisease();
      });

      return ()=>{
          listener.remove();
      }
  },[]);*/


    //console.log({disease});
    return(
  
    <ScrollView>
      <DiseaseForm
       onSubmit={predictDisease}
      />
    
    </ScrollView>
    );
};

DiseaseScreen.navigationOptions = {
    title: 'LifeSpire',
    tabBarIcon:<FontAwesome name="heart" size={24} color="black" />,
  };


const styles = StyleSheet.create({});

export default DiseaseScreen;