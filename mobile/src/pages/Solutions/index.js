import React, {useState, useEffect} from 'react';
import {Feather} from '@expo/vector-icons'
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Solutions(){
  const navigation = useNavigation();
  const [solutions, setSolutions] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);



  function navigateToDetail(solution) {
    navigation.navigate('Detalhes',{solution})
  }

  async function loadSolutions(){
    if (loading) {
      return;
    }

    if (total > 0 && solutions.length == total) {
      return ;
    } 

    setLoading(true);

    const response = await api.get('/solucoes', {
      params: {page}
    });

    setSolutions([...solutions, ...response.data]);
    setTotal(response.headers['total-solucoes']);
    setPage(page+1);
    setLoading(false);
  }

  useEffect(()=>{
    loadSolutions();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
          <Text style={styles.headerText}>
             Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Veja as soluções abaixo e deixe um like.</Text>

        <FlatList
          data={solutions}
          style={styles.solutions} 
          keyExtractor={solution=>String(solution.id)}
          //showsVerticalScrollIndicator={false}
          onEndReached={loadSolutions}
          onEndReachedThreshold={0.2}
          renderItem={({item: solution})=>(
            <View style={styles.solution}>
            <Text style={styles.solutionProperty}>Problema:</Text>
            <Text style={styles.solutionValue}>{solution.titulo}</Text>

            <Text style={styles.solutionProperty}>Descrição:</Text>
            <Text style={styles.solutionValue}>{solution.problemaDescricao}</Text>

            <Text style={styles.solutionProperty}>Solução:</Text>
            <Text style={styles.solutionValue}>{solution.problemaSolucao}</Text>


            <TouchableOpacity
              style={styles.detailsButton}
              onPress={()=>navigateToDetail(solution)}
            >

              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#1B57CB" />

            </TouchableOpacity>

          </View>
          )}
        />          

    </View>
  ); 
}