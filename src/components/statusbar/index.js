import React, { } from 'react';
import { View } from 'react-native';
import style from './style';
const { bar } = style;
export default StatusBar = (props) => {
    return <View style={[bar,props.style,{backgroundColor:props.color}]}/>
}