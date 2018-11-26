import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import {MainFeed, Profile, Camera, Login} from './components/screens';
import { createBottomTabNavigator } from 'react-navigation';
import Camera from './components/screens/Camera';

const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,

})
class InstaClone extends Component {
    render(){
        return (
            <Tabs />
        )
    }
}

export default InstaClone;
