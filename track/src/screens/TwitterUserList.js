import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';


const Item = ({name , handle}) => {
   return(
   <ListItem
   containerStyle = {{
     marginVertical : 5,
     borderRadius : 10,
     marginHorizontal : 5
   }}
  friction={90} 
  tension={100} 
  activeScale={0.95}
>
  <ListItem.Content>
    <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
      {name}
    </ListItem.Title>
    <ListItem.Subtitle>
        {handle}
    </ListItem.Subtitle>
  </ListItem.Content>
</ListItem>
)
}

const TwitterUserList = ({ navigation }) => {
    const handle1 = "MoHFW_INDIA"
    const handle2 = "who"
    const handle3 = "AyushmanNHA";
    const handle4 = "NHPINDIA";
    const handle5 = "ihissues";
  return (
    <ScrollView>
      <TouchableOpacity
              onPress={() =>
                navigation.navigate('TwitterApi', { handle : handle1 })
              }
            >
            <Item 
                    name = "Ministry of Health and Family Welfare"
                    handle = "MoHFW_INDIA"
            />
            
        </TouchableOpacity>
        <TouchableOpacity
              onPress={() =>
                navigation.navigate('TwitterApi', { handle : handle2 })
              }
            >
            <Item 
                    name = "World Health Organization"
                    handle = "WHO"
            />
            
        </TouchableOpacity>
        <TouchableOpacity
              onPress={() =>
                navigation.navigate('TwitterApi', { handle : handle3 })
              }
            >
            <Item 
                    name = "National Health Authority (NHA)"
                    handle = "AyushmanNHA"
            />
            
        </TouchableOpacity>
        <TouchableOpacity
              onPress={() =>
                navigation.navigate('TwitterApi', { handle : handle4 })
              }
            >
            <Item 
                    name = "National Health Portal"
                    handle = "NHPINDIA"
            />
            
        </TouchableOpacity>
        <TouchableOpacity
              onPress={() =>
                navigation.navigate('TwitterApi', { handle : handle5 })
              }
            >
            <Item 
                    name = "Health Issues India"
                    handle = "ihissues"
            />
            
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default TwitterUserList;
