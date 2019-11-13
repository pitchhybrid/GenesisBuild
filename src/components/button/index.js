import React, { } from 'react';
import { View, TouchableOpacity } from 'react-native';

export default (props) => {
    return (
        <View style={props.style}>
            <TouchableOpacity style={{padding:5}} onPress={props.onPress}>
                {props.children}
            </TouchableOpacity>
        </View>
    );
}