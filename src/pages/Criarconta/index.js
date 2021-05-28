import React, {useState}from 'react';
import { View, StyleSheet, Touchable, TouchableOpacity,Text,TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import firebase from '../../firebaseConnection'

export default function Login() {
    const navegacao = useNavigation();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function cadastrar(){
        await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((value)=>{alert('Cadastrado com sucesso!'), navegacao.goBack()})
        .catch((error)=>{
            if(error.code === 'auth/invalid-email'){
                alert('Email Invalido!')
                return;
            }
            if(error.code === 'auth/weak-password'){
                alert('Sua senha precisa ter 6 caracteres!')
                return;
            }else{
                alert('oops')
                return;
            }
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
       <Text style={estilo.texto_subtitulo}>espero que eu possa lhe ajudar</Text>

       <View style={estilo.input_email}>
            <TextInput
            placeholder='Email'
            style={{fontSize:18, color:'#7C7D88',textAlign:'center'}}
            placeholderTextColor='#7C7D88'
            onChangeText={(texto)=>setEmail(texto)}
            value={email}/>
       </View>

       <View style={estilo.input_senha}>
            <TextInput
            placeholder='Senha'
            style={{fontSize:18, color:'#7C7D88',textAlign:'center'}}
            placeholderTextColor='#7C7D88'
            onChangeText={(texto)=>setPassword(texto)}
            value={password}/>
            <TouchableOpacity>
                <Feather name='eye' size={22} color='#7C7D88'/>
            </TouchableOpacity>
       </View>

       <TouchableOpacity style={estilo.botão_logar} onPress={cadastrar}>
           <Text style={estilo.texto_botoes}>Criar conta</Text>
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
        width:'60%',
        height:56,
        padding:15,
        marginTop:300,
        alignItems:'center',
        borderRadius:20
    }
})