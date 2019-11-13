import React, { Component } from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import style from './style';
import { Actions } from 'react-native-router-flux';
import StatusBar from './../statusbar'
const { container, texto, button } = style;


export default class Parallax extends Component {
  componentWillMount() {
    Font.loadAsync({ 'varela-round': require('./../../../assets/VarelaRound-Regular.ttf') })
  }

  render() {
    const { image, hero } = this.props
    return (
      <View>
        <StatusBar color="#000"></StatusBar>
        <ImageBackground style={container} blurRadius={1.3}
          source={{ uri: image }}>
          <TouchableOpacity onPress={() => Actions.pop()}
            style={button}>
            <AntDesign name="back" color="#FFF" size={22}></AntDesign>
          </TouchableOpacity>
          <View style={texto}>
            <Text style={{ fontSize: 35, fontFamily: 'varela-round', color: 'white' }}>{hero}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
