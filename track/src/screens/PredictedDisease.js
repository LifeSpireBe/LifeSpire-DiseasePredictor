import React, { useContext,useState } from 'react';
import {  Text, FlatList,ScrollView,Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context } from '../context/AuthContext';
import * as precaution from '../localJson/Precautions';
import * as description from '../localJson/Description';
import images from '../localJson/Yogas';
import Spacer from '../components/Spacer';
import {Button,Overlay} from 'react-native-elements';

const Item = ({prec}) => {
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
    <ListItem.Title style={{ color: 'red', fontWeight: 'bold' }}>
      {prec.toUpperCase()}
    </ListItem.Title>
  </ListItem.Content>
</ListItem>
)
}
const PredictedDisease =()=>{

    const {state, predictDisease } =useContext(Context);
    const precautions = Object.values(precaution[state])
    const descriptions = Object.values(description[state])
    const yogas = images[state]
    
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
      setVisible(!visible);
    };
    return (
    <ScrollView>
        <Text style = {{textAlign : 'center' , fontFamily : 'sans-serif' , fontSize : 25 , marginVertical : 10}}> You are likely to have {state} </Text>
        <Spacer />
        <Button 
          title = "Open Description"
          onPress={toggleOverlay}
         
        />
         <Overlay isVisible={visible} 
         overlayStyle={{
           height:720,
           marginHorizontal:2
         }}
         onBackdropPress={toggleOverlay}
         >
  
        <Text style = {{fontSize : 20, fontFamily:'sans-serif',marginTop:30 }} >{descriptions}</Text>
      </Overlay>
       <Spacer />

        <Text style = {{fontSize : 25, fontFamily : 'sans-serif' , textAlign : 'center'}}> Precautions </Text>
        
        <FlatList
        data={precautions}
        keyExtractor={precautions => precautions}
        renderItem={({ item }) => {
          return (
            <Item 
                prec = {item}
            />
          );
        }}
      />
<Spacer />
        <Text
        style = {{fontSize : 25, fontFamily : 'sans-serif' , textAlign : 'center'}}
        
        >
          Yoga Asanas</Text>
          <Spacer/>
      <FlatList
        horizontal 
        data={yogas}
       // keyExtractor={yogas => yogas}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Image 
              source = {item}
              style={{ width: 200, height: 200 , borderRadius : 20 , marginHorizontal : 5}}
            />
          );
        }}
      />
      <Spacer />
    </ScrollView>
    )
};

export default PredictedDisease;