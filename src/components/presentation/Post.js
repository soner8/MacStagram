import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import config from "../../config"

class Post extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width,
            liked: false
        }
    }

    onLikeClick = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = (this.props.item % 2===0) ? "https://lh3.googleusercontent.com/t6Hbr2HZh0t_J8jRBPK_NYUE1gsuICtQUQGuMdBo2yGfUTm-n9ZGzDZ3kdasQr7xpyWCBAhmzZkHNaKhvYCLpy4Nfg" + "=s" + imageHeight + "-c" :"https://lh3.googleusercontent.com/uhj9nNtUuJTfATkYHEpceZVKzpJuxMWkLmQdhKCdIAj3Ok0yETSDrB1wtEAyguSF9I-IsQQaTJelWJ2GqAh-MK3q9A" + "=s" + imageHeight + "-c"
        const imageUri = imageSelection
        const heartColor = (this.state.liked) ? "rgb(252,61,57)" : null
        return (
            <View>
                <View style={styles.userBar}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image style={styles.userAvatar} source={{uri: "https://lh3.googleusercontent.com/Am-N8Unxnwc5S4ESU595B6o5rL6EpZ16fxF6tNcGIa2EUDjQ2kyXAnuJRXnkV-icT1ed59paPyFkIK0Ch1HdUZ0t"}}/>
                        <Text style={styles.userName}>Soner8</Text>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <TouchableOpacity>
                            <Text style={{fontSize: 30}}>...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={()=> (this.onLikeClick())}>
                    <Image style={{width: 100 + "%", height:500}} source={{uri : imageUri}}></Image>
                </TouchableOpacity>

                <View style={styles.iconsBar}>
                    <TouchableOpacity onPress={()=> (this.onLikeClick())}>
                        <Image style={[styles.icon, {tintColor: heartColor}]} source={config.images.heartIcon}></Image>
                    </TouchableOpacity>
                    <Image style={[styles.icon, {height: 40, width: 40}]} source={config.images.chatIcon}></Image>
                </View>
                <View style={styles.commentBar}>
                    <Image style={[styles.icon, {height: 30, width: 30, tintColor: heartColor}]} source={config.images.heartIcon}></Image>
                    <Text>389 Likes</Text>
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
    userBar: {
        width: 100+'%',
        height: config.styleConst.rowHeight,
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userAvatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    userName: {
        marginLeft: 10
    },
    iconsBar: {
        height: config.styleConst.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(234,233,234)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginHorizontal: 5 
    },
    commentBar: {
        width: 100 + "%",
        borderColor: "rgb(234,233,234)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    }
})

export default Post;
