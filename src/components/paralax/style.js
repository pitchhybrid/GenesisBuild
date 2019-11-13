import { Dimensions,StyleSheet } from 'react-native';

const {width} = Dimensions.get('window');
const height = 100;


export default StyleSheet.create({
    container:{
        width,
        height
    },
    texto:{
        justifyContent:'center',
        alignItems:'center',
        height
    },
    button:{
        backgroundColor:'rgba(0,0,0,0.1)',
        padding:10,
        position:'absolute',
        top:0,
        left:0,
        height:'auto',
        width:'auto',
        borderRadius:50.0
    }
});