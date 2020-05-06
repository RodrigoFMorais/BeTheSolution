import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  View, 
  Image,
  ScrollView, 
  Text,
  Alert,
  Button, 
  TouchableOpacity, 
  TextInput, 
  FormInput, 
  FormLabel, 
  FormValidationMessage} from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';



export default function Login() {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  /** 
   * constructor(props) {
    super(props);
    
    this.state = { 
      email: '',
      passwd: '',
    };
  }*/

  go = () => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(email) == true){
          alert('valid');
      }
      else{
          alert();
      }

  }

  function onLogin(){
    //const { username, password } = this.state;
    Alert.alert('Credentials', `${email} + ${passwd}`);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.form}>
        <ScrollView style={{padding: 20}}>

          <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={(value) => {setEmail(value)}}
          />
          <TextInput 
            placeholder='Password' 
            secureTextEntry={true}
            value={passwd}
            onChangeText={(value) => {setPasswd(value)}}
          />

          <View style={styles.actions} />
          <TouchableOpacity style={styles.action} onPress={onLogin}>
            <Text style={styles.actionText}>Entrar</Text>
          </TouchableOpacity>

        </ScrollView>

      </View>

    </View>
  );
}