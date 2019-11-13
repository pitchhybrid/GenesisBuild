import {StyleSheet,Dimensions} from 'react-native'
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    border:{
        borderColor:'#4E4C4D',
        borderWidth:1,
        borderRadius:10.0,
        padding:2,
    },
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
    }
});