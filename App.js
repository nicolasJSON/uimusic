import React, {useState,useEffect} from 'react';
import { View, Text, TextInput,Image, StyleSheet,TouchableOpacity, Touchable} from 'react-native';
import firebase from './src/firebaseConnection';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';

import Home from './src/pages/Home'
import Logar from './src/pages/Logar'
import Login from './src/pages/Login'
import Criarconta from './src/pages/Criarconta'

export default function App(){
      const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Logar' component={Logar} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Criarconta' component={Criarconta} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
