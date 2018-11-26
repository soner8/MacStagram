import React, { Component } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from "react-native"
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{height: "100%", width: "100%", flex: 1, justifyContent: "center", alignItems:"center"}}>
                <Text>Let's Sign You Up !</Text>
                <TextInput style={{borderColor: "red", borderWidth: 2}}></TextInput>
                <TextInput></TextInput>
                <Button title={"Let's Have Fun !"}></Button>
            </View>
        );
    }
}

export default SignUp;
