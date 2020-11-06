import React, { useContext } from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const Item = ({items}) => {
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
     {items}
   </ListItem.Title>
  
 </ListItem.Content>
</ListItem>
)
}


const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <Item
              items={item.name}
              />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: 'LifeSpire'
};

const styles = StyleSheet.create({});

export default TrackListScreen;
