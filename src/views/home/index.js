import React, { Component } from 'react';
import { View, TextInput, ScrollView, Text, ActivityIndicator,Button as Ba } from 'react-native';
import { Heroi, StatusBar, Button, Hr } from './../../components'
import style from './style';
import * as Font from 'expo-font';
import fetchApi from './../../fetch';
import { Actions } from 'react-native-router-flux';

const { border, container, scroll, list } = style;
export default class Home extends Component {
    state = {
        heroes: [],
        itens:[],
        pesquisa: '',
        status:false
    }

    componentWillMount() {
        this.setState({status:true})
        fetchApi('https://genesisbuild-adfb1.firebaseio.com/heroes.json', 
            heroes => this.setState({heroes}));
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
                <View style={{ padding: 5, paddingBottom: 0 }}>
                    <View style={border}>
                        <TextInput placeholder="Pesquisar" style={{ color: 'white', textAlign: 'center' }} onChangeText={(text) => this.setState({pesquisa:text})}/>
                    </View>
                </View>
                <ScrollView style={scroll}>
                {this.state.status && <ActivityIndicator animating={this.state.status} size='large'></ActivityIndicator>}
                    {
                        this.state.heroes.map((item, index) => {
                            return <Fragment key={index} build={this.sortItens()} item={item}></Fragment>;
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

function Fragment({ item, build }) {
    return (<View style={[border, list]}>
        <Button onPress={() => { Actions.builds({hero:item,build}) }}>
            <Heroi image={item.image}>
                <Text style={{ fontSize: 25, fontFamily:'varela-round',color: 'white' }}>{item.hero.replace('_',' ')}</Text>
            </Heroi>
        </Button>
    </View>);
}