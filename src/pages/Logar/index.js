import React, {useState,useEffect} from 'react';
import { View, Text, TextInput,Image, StyleSheet,TouchableOpacity, Touchable} from 'react-native';
import firebase from '../../firebaseConnection';
import { useNavigation } from '@react-navigation/native'

export default function logar(){
      const navegacao = useNavigation()
  return(
    <View style={{flex:1, alignItems:'center'}}>
      <Image
      source={require('../../imgs/1.png')}
      style={{width:'50%', height:'45%',marginTop:10}}/>
      <View style={{backgroundColor:'#191720', width:'100%',height:'60%', borderTopLeftRadius:32,borderTopRightRadius:32}}>
        <Text style={estilo.texto_titulos}>Estude e relaxe</Text>
        <Text style={estilo.texto_subtitulo}>aproveite as nossas musicas para estudar melhor e com o melhor preço do mercado</Text>

      <View style={estilo.view_botao}>
        <TouchableOpacity activeOpacity={1} style={estilo.areabotao} onPress={()=> navegacao.navigate('Criarconta')}>
          <Text style={estilo.texto_botoes}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={estilo.areabotao2} onPress={()=>navegacao.navigate('Login')}>
          <Text style={estilo.texto_botoes2}>Logar</Text>
        </TouchableOpacity>
      </View>
      
      </View>
    </View>
  )
}

const estilo = StyleSheet.create({
  texto_titulos:{
    fontSize:36,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop:20,
    color:'#fff'
  },
  texto_subtitulo:{
    fontSize:15,
    color:'#5F5F5F',
    fontStyle:'italic',
    textAlign:'center',
    marginTop:10
  },
  texto_botoes:{
    fontSize:18,
    fontWeight:'bold',
    color:'#fff',
    textAlign:'center'
  },
  areabotao:{
    backgroundColor:'rgba(126, 126, 126, 0.5)',
    width:169,
    height:60,
    borderRadius:20,
    padding:15,
    marginLeft:155,
    resizeMode: 'cover',
    position: 'absolute',
  },
  areabotao2:{
    backgroundColor:'#fff',
    width:169,
    height:60,
    borderRadius:20,
    padding:15,
    marginLeft:15,
  },
  texto_botoes2:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000',
    textAlign:'center'
  },
  view_botao:{
    flexDirection:'row',
    marginLeft:40,
    marginTop:130
  }
})