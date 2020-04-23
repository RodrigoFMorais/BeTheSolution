import React from 'react';
import {Feather} from '@expo/vector-icons';
import {View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();

  const solution = route.params.solution;
  const message = `Olá ${solution.name}, 
  
  Estou entrando em contato pois também concordo com a sua solução 
  para o problem  "${solution.titulo}" e  gostaria de saber como 
  posso ajudar a realiza-lá?
  
  Atenciosamente,`;

  function navigateToSolutions() {
    navigation.navigate('Solução')
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: `Solucionador do problema: ${solution.titulo} da cidade de ${solution.city}`,
      recipients: [solution.email],
      body: message,
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5534992630931&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logoImg} />

          <TouchableOpacity onPress={navigateToSolutions}>
            <Feather name="arrow-left" size={28} color="#1B57CB" />
          </TouchableOpacity>
      </View>
 
          <View style={styles.solution}>
            <Text style={[styles.solutionProperty, {marginTop: 0} ]}>Problema:</Text>
            <Text style={styles.solutionValue}>{solution.titulo} da cidade de {solution.city}</Text>

            <Text style={styles.solutionProperty}>Descrição:</Text>
            <Text style={styles.solutionValue}>{solution.problemaDescricao}</Text>

            <Text style={styles.solutionProperty}>Solução:</Text>
            <Text style={styles.solutionValue}>{solution.problemaSolucao}</Text>
          </View>
      
      <View style={styles.contactBox}>
        <Text style={styles.solutionTitle}>Você concorda?</Text>
        <Text style={styles.solutionTitle}>Veja se esta solução lhe parece factível.</Text>

        <Text style={styles.solutionDescription}>Entre em contato com o author.</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
} 