import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import config from "../../config"
import {PostFeed} from '../container';

class MainFeed extends Component {
    render(){
        return (
            <View style={{flex: 1, width: 100 + "%", height: 100 + "%" }}>
                <View style={styles.nav} >
                    <Text>MacStagram</Text>
                </View>
                <View>
                    <PostFeed />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    nav: {
        width: 100 + "%",
        height: 55,
        marginTop: 30,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(234,233,234)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },

})

export default MainFeed;
