
import React, {Component} from 'react';
import { createSwitchNavigator } from "@react-navigation/core";
import { createAppContainer, createBottomTabNavigator, createStackNavigator} from "react-navigation"
import {MainFeed, Login, Camera, Profile, SignUp} from './src/components/screens/';

const LoginStack = createStackNavigator({
  login: Login,
  signIn: SignUp
})

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile

})
const AppNavigator = createSwitchNavigator({
  home: Tabs,
  login : LoginStack,
},
{
  initialRouteName: "login"
});

const App =   createAppContainer(AppNavigator);

export default App;
