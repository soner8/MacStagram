import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput, Button, View } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    login() {
        this.props.navigation.navigate( 'signIn');    }
    render() {
        return (
            <TouchableOpacity onPress={this.login.bind(this)} style={{height: "100%", width: "100%", flex: 1, justifyContent: "center", alignItems:"center"}}>
                <Text>Login Page</Text>
            </TouchableOpacity> 
        );
    }
}

export default Login;