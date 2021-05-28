import React, {useState} from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity,Text,TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebaseConnection';


export default function Login() {
    const navegacao = useNavigation()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function login(){
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((value)=>{navegacao.navigate('Home')})

        .catch((error)=>{
            alert('oops')
            return;
        })
    }
 return (
   <View style={estilo.background}>

       <View style={{padding:15, }}>
        <TouchableOpacity onPress={()=> navegacao.navigate('Logar')}>
            <Feather name='arrow-left' size={40} color='#fff'/>
        </TouchableOpacity>
       </View>

       <View style={{alignItems:'center'}}>
       <Text style={estilo.texto_titulos}>Bem vindo</Text>
       <Text style={estilo.texto_subtitulo}>é ótimo ter você aqui denovo</Text>

       <View style={estilo.input_email}>
            <TextInput
            placeholder='Email'
            style={{fontSize:18, color:'#7C7D88',textAlign:'center',}}
            placeholderTextColor='#7C7D88'
            onChangeText={(texto)=> setEmail(texto)}
            value={email}/>
       </View>

       <View style={estilo.input_senha}>
            <TextInput
            placeholder='Senha'
            style={{fontSize:18, color:'#7C7D88',textAlign:'center'}}
            placeholderTextColor='#7C7D88'
            onChangeText={(texto)=> setPassword(texto)}
            value={password}/>
            <TouchableOpacity>
                <Feather name='eye' size={22} color='#7C7D88'/>
            </TouchableOpacity>
       </View>

        <View style={{flexDirection:'row',marginRight:40}}>
            <Text style={{fontSize:14, color:'#7C7D88',marginTop:280}}>Não tem uma conta?</Text>
            <TouchableOpacity onPress={()=> navegacao.navigate('Criarconta')}>
                <Text style={{fontSize:14, color:'#B2B1B4',marginTop:280}}> Criarconta</Text>
            </TouchableOpacity>

        </View>

       <TouchableOpacity style={estilo.botão_logar} onPress={login}>
           <Text style={estilo.texto_botoes}>Logar</Text>
       </TouchableOpacity>
       </View>

   </View>
  );
}

const estilo = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#191720',
    },
    texto_titulos:{
        fontSize:36,
        textAlign:'center',
        fontWeight:'bold',
        paddingTop:20,
        color:'#fff'
    },
    texto_subtitulo:{
        fontSize:18,
        color:'#5F5F5F',
        textAlign:'center',
        marginTop:10
    },
    texto_botoes:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000',
    textAlign:'center'
    },
    Input:{
        width:'70%',
        height:53,
        borderWidth:1,
        borderColor:'#2C2B33',
        borderRadius:10,
        backgroundColor:'#1E1C24',
        marginTop:50,
        padding:10,
        fontSize:18,
        color:'#7C7D88'
    },
    input_senha:{
        width:'60%',
        height:53,
        borderWidth:1,
        borderColor:'#2C2B33',
        borderRadius:10,
        backgroundColor:'#1E1C24',
        marginTop:20,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    input_email:{
        width:'60%',
        height:53,
        borderWidth:1,
        borderColor:'#2C2B33',
        borderRadius:10,
        backgroundColor:'#1E1C24',
        marginTop:50,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    botão_logar:{
        backgroundColor:'#fff',
        width:'70%',
        height:56,
        padding:15,
        alignItems:'center',
        borderRadius:20
    }
})