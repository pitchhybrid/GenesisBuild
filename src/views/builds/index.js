import React, { Component } from 'react';
import { Text,View,SafeAreaView,ScrollView, Image,TouchableOpacity  } from 'react-native';
import { StatusBar, Paralax } from './../../components'
import styles from './style';

const { container, list, border, flex, itens,item,scroll } = styles;

export default class Builds extends Component {
    state = {
        build:[],
        item:null,
        hero:null,
    }
    componentWillMount(){
        const {build,hero} = this.props;
        this.setState({build,hero,item:build[0]});
    }
    
    render() {
        var flag = false;
        return (
        <SafeAreaView style={container}>
            <Paralax image={this.state.hero.image} hero={this.state.hero.hero}></Paralax>
            <View style={[flex,itens]}>
                {
                    this.state.build.map((v,i)=>{
                        return <Item onPress={()=>{
                            this.setState({item:v})
                        }} image={v.image} key={i}></Item>
                    })
                }
            </View>
            <ScrollView style={scroll}>
                <View style={[border,list]}>
                    <View style={{marginTop:20,marginBottom:20}}>
                        <Text style={{color:'#D74061',fontSize:20,textAlign:'center'}}>{this.state.item.item}</Text>
                    </View>
                    
                {
                    this.state.item.descricao.map((v,i)=>{
                        var color = 'white';
                        if(v.startsWith('Custo')){
                            color = '#FCC069';
                            flag = true;
                        }
                        if(v.startsWith('[') && v.endsWith(']')){
                            color = '#F9F871';
                        }
                        if(v.includes('+')){
                            color = '#2BC38A';
                        }
                        if(flag){
                            return <Text style={{color,fontSize:16}} key={i}>{v}</Text>
                        }
                        return;
                    })
                
                }
                </View>
                <View style={{height:100}}></View>
            </ScrollView>
        </SafeAreaView>
        );
    }
}

function Item({image,onPress}){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[item,border]}>
             <Image source={{uri:image}} style={{width:'100%',height:'100%'}}></Image>
            </View>
        </TouchableOpacity>
    );
}