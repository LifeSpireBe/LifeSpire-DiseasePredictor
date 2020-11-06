import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TwitterApi from './src/screens/TwitterApi';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons';
import DiseaseScreen from './src/screens/DiseaseScreen';
import PredictedDisease from './src/screens/PredictedDisease';
import CreateTask from './src/screens/CreateTask';
import TwitterUserList from './src/screens/TwitterUserList';
import { Entypo } from '@expo/vector-icons';
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});


const DiseaseNav = createStackNavigator({
  Predictor: DiseaseScreen,
  Predict: PredictedDisease
  
});

const CalenderNav = createStackNavigator({
 TwitterUserList,
 TwitterApi
})

CalenderNav.navigationOptions={
  title:'News',
  tabBarIcon:<Entypo name="news" size={24} color="black" />
}

DiseaseNav.navigationOptions={
  title:'Predictor',
  tabBarIcon:<FontAwesome name="heart" size={24} color="red" />,
}
trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    DiseaseNav,
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    CalenderNav,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
