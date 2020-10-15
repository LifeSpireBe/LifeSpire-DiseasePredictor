import React, { useState } from 'react';
//import { } from 'react-native';
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Card } from 'react-native-paper';

import { FontAwesome } from '@expo/vector-icons';

const CalendarScreen = () =>{

   const [items, setItems] =useState({});

    const timeToString=(time)=> {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
    const loadItems=(day)=> {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {newItems[key] = items[key];});
          setItems(newItems);
        }, 1000);
      }


      const renderItem = (item) =>{
        return(
          <TouchableOpacity>
            <Card>
              <Card.Content>
                <View>
                  <Text>{item.name}</Text>
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )
      }

    return (
        <View style={{flex:1}}>

        <Agenda
       
       items={items}
       loadItemsForMonth={loadItems}
       selected={'2017-05-16'}
       renderItem={renderItem}
    
     />

        </View>
    )
};

const styles= StyleSheet.create({});

CalendarScreen.navigationOptions = {
    title: 'LifeSpire',
    tabBarIcon:<FontAwesome name="heart" size={24} color="black" />,
  };


export default CalendarScreen;
