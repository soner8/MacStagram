import React, { Component } from 'react'
import { FlatList } from 'react-native';
import {Post} from '../presentation';

class PostFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    _renderPost({item}){
        return <Post item={item} />
    }
    _returnKey(item) {
        return item.toString();
    }
    render() {
        return (
            <FlatList data={[1,2,3]} keyExtractor={this._returnKey} renderItem={(item)=>this._renderPost(item)}/>
        );
    }
}

export default PostFeed;