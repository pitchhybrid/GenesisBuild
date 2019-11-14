import React, { Component } from 'react';
import { View, TextInput, ScrollView, Text, ActivityIndicator } from 'react-native';
import { Heroi, StatusBar, Button } from './../../components'
import style from './style';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import fetchApi from './../../fetch';
import { Actions } from 'react-native-router-flux';

const { border, container, scroll, list } = style;
export default class Home extends Component {
    state = {
        heroes: [],
        heroesCp:[],
        itens:[],
        pesquisa: '',
        status:false
    }

    componentWillMount() {
        this.setState({status:true})
        fetchApi('https://genesisbuild-adfb1.firebaseio.com/heroes.json', 
            heroes => this.setState({heroes,heroesCp:heroes}));
        fetchApi('https://genesisbuild-adfb1.firebaseio.com/itens.json',
            itens => this.setState({itens,status:false}))
        Font.loadAsync({'varela-round':require('./../../../assets/VarelaRound-Regular.ttf')})
    }

    sortItens(){
        const itens = [];
        const rand = [];
        for(var i=0 ; i <= 5;i++){
            var index = Math.floor(Math.random() * this.state.itens.length);
            if(!rand.includes(index)){
                itens.push(this.state.itens[index]);
                rand.push(index);
            }else{
                itens.push(this.state.itens[Math.floor(Math.random() * this.state.itens.length)]);
            }
        }
        return itens;
    }

    render() {
        return (
            <View style={container}>
                <StatusBar color="#000" />
                    <View style={[border,{marginTop:5}]}>
                    <AntDesign style={{ position:'absolute',top:5, left:5}} name="search1" color="#FFC75F" size={22}/>
                    <TextInput placeholder="Pesquisar" 
                        style={{ color: 'white', marginLeft:35,textAlign: 'left' }} 
                        onChangeText={(text) => this.setState({pesquisa:text})}
                        onSubmitEditing={()=>{
                            if(this.state.pesquisa == ''){
                                let heroes = this.state.heroes;
                                this.setState({heroesCp:heroes});
                                return;
                            }
                            var heroes = this.state.heroes.filter((v,i)=> this.state.pesquisa.toUpperCase().includes(v.hero.toUpperCase()));
                            this.setState({heroesCp:heroes})
                            
                        }}/>
                    </View>
                <ScrollView style={scroll}>
                    {this.state.status && <ActivityIndicator animating={this.state.status} size='large'></ActivityIndicator>}
                    {
                        this.state.heroesCp.map((item, index) => <Fragment key={index} build={this.sortItens()} item={item}></Fragment>)
                    }
                </ScrollView>
            </View>
        )
    }
}

function Fragment({ item, build }) {
    const colors = ['#845EC2','#D65DB1','#FF6F91','#FF9671','#FFC75F','#F9F871'];
    var index = Math.floor(Math.random() * colors.length);
    return (<View style={[list,border,{borderLeftColor:colors[index],borderRightColor:colors[index]}]}>
        <Button onPress={() => { Actions.builds({hero:item,build}) }}>
            <Heroi image={item.image}>
                <Text style={{ fontSize: 25, fontFamily:'varela-round',color: 'white' }}>{item.hero.replace('_',' ')}</Text>
            </Heroi>
        </Button>
    </View>);
}