import React, {useState} from 'react';
import { View, StyleSheet,TouchableOpacity,Text,Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import firebase from '../../firebaseConnection';
import { useNavigation } from '@react-navigation/native'

export default function home() {
      const navegacao = useNavigation();
    async function logout(){
      await firebase.auth().signOut();
      navegacao.navigate('Logar')
    }
 return (
   <View style={estilo.background}>
     <View style={estilo.header}>
       <TouchableOpacity>
        <Feather name='menu' size={25} color='#fff'/>
       </TouchableOpacity>
        <Text style={estilo.titulo}>Study-Fi</Text>
       <TouchableOpacity>
        <Feather name='log-out' size={25} color='#fff' onPress={logout}/>
       </TouchableOpacity>
     </View>

     <View style={estilo.musicas}>
      <Image
      source={require('../../imgs/lofi.jpg')}
      style={{width:77, height:77}}/>
      <Text style={estilo.texto_musica1}>Musica 1</Text>
      <Text style={estilo.texto_musica2}>artista desconhecido</Text>
     </View>
     <View style={estilo.musicas}>
      <Image
      source={require('../../imgs/lofi.jpg')}
      style={{width:77, height:77}}/>
      <Text style={estilo.texto_musica1}>Musica 2</Text>
      <Text style={estilo.texto_musica2}>artista desconhecido</Text>
     </View>
     <View style={estilo.musicas}>
      <Image
      source={require('../../imgs/lofi.jpg')}
      style={{width:77, height:77}}/>
      <Text style={estilo.texto_musica1}>Musica 1</Text>
      <Text style={estilo.texto_musica2}>artista desconhecido</Text>
     </View>
     <View style={estilo.musicas}>
      <Image
      source={require('../../imgs/lofi.jpg')}
      style={{width:77, height:77}}/>
      <Text style={estilo.texto_musica1}>Musica 1</Text>
      <Text style={estilo.texto_musica2}>artista desconhecido</Text>
     </View>
     <View style={estilo.musicas}>
      <Image
      source={require('../../imgs/lofi.jpg')}
      style={{width:77, height:77}}/>
      <Text style={estilo.texto_musica1}>Musica 1</Text>
      <Text style={estilo.texto_musica2}>artista desconhecido</Text>
     </View>
   </View>
  );
}

const estilo = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#191720',
  },
  header:{
    padding:5,
    justifyContent:'space-between',
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#2C2B33'
  },
  titulo:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },
  musicas:{
    padding:15,
    marginTop:30,
    flexDirection:'row'
  },
  texto_musica1:{
    color:'#fff',
    fontSize:24,
    fontWeight:'bold',
    marginLeft:5
  },
  texto_musica2:{
    color:'#fff',
    fontSize:18,
    marginTop:30,
    marginLeft:-98
  }
})