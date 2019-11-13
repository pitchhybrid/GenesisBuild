import { StyleSheet, Dimensions } from 'react-native';

const { height,width } = Dimensions.get('screen');

export default StyleSheet.create({
    flex:{
        flex:1,
        flexDirection:'row'
    },
    size:{
        height: 95
    },
    col:{
        width: width / 2,
    }
});