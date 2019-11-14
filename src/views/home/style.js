import {StyleSheet,Dimensions} from 'react-native'
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        backgroundColor:'#403F40',
        width,
        height
    },
    scroll:{
        height:height - 30
    },
    list:{
        padding:0,
        borderRadius:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        marginTop:10,
    },
    border:{
        borderLeftWidth:2,
        borderRightWidth:2,
        borderLeftColor:'#FFC75F',
        borderRightColor:'#FFC75F',
        borderBottomWidth:1,
        borderTopWidth:1,
        borderBottomColor:'#4E4C4D',
        borderTopColor:'#4E4C4D',
        borderRadius:5.0,
        padding:2,
    }
});