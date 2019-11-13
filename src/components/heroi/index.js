import React, { } from 'react';
import { View ,Text} from 'react-native';
import { Avatar } from 'react-native-paper';
import style from './style';

const { flex, size,col } = style;
export default (props) => {
    return (
        <View style={props.style}>
            <View style={[flex,size]}>
                <View style={{padding: 10}}>
                    <Avatar.Image size={75} source={{ uri: props.image }}></Avatar.Image>
                </View>
                <View style={[col,{alignItems:'center',justifyContent:'center'}]}>
                    {props.children}
                </View>
            </View>
        </View>
    );
}