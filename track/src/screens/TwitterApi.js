import React, { useContext } from 'react';
import { StyleSheet, Linking, TouchableOpacity,ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as fetchTweet } from '../context/AuthContext';



const Item = ({tweets , created_at}) => {
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
      {tweets}
    </ListItem.Title>
    <ListItem.Subtitle>
        {created_at}
    </ListItem.Subtitle>
  </ListItem.Content>
</ListItem>
)
}

const TwitterApi = ({ navigation }) => {
  const { state, fetchTweets } = useContext(fetchTweet);
  const handle = navigation.getParam('handle')
    console.log(handle)
    //console.log(state)
    const tweets = state
    //console.log(tweets[0].text)
  return (
    <ScrollView>
      <NavigationEvents onWillFocus={() =>fetchTweets(handle)} />

      <Item 
            tweets = {tweets[0].text}
            created_at = {tweets[0].created_at}
      />
      <Item 
            tweets = {tweets[1].text}
            created_at = {tweets[1].created_at}
      />
      <Item 
            tweets = {tweets[2].text}
            created_at = {tweets[2].created_at}
      />
      <Item 
            tweets = {tweets[3].text}
            created_at = {tweets[3].created_at}
      />
      <Item 
            tweets = {tweets[4].text}
            created_at = {tweets[4].created_at}
      />
    </ScrollView>
  );
};

TwitterApi.navigationOptions = {
  title: 'News'
};

const styles = StyleSheet.create({});

export default TwitterApi;
