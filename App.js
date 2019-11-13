import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router,Stack, Scene } from 'react-native-router-flux';
import {Builds,Home} from './src/views';
export default function App() {
  return (
    <Router>
      <Stack hideNavBar={true}>
        <Scene key="home" component={Home}></Scene>
        <Scene key="builds" component={Builds}></Scene>
      </Stack>
    </Router>
  );
}