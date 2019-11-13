import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    border: {
        borderColor: '#4F5256',
        borderWidth: 1,
        borderRadius: 10.0,
        padding: 0,
    },
    container: {
        backgroundColor: '#403F40',
        width,
        height
    },
    scroll: {
        padding:25,
        height:'150%'
    },
    list: {
        padding: 0,
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginTop: 10,
    },
    flex:{
        flex:0,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    itens:{
        height:80,
        width,
        marginTop:10,
        justifyContent:'space-around'
    },
    item:{
        height:80,
        width: (width / 6) - 3
    },
});