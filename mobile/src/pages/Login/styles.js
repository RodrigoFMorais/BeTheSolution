import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  header: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center'
  },

  actions:{
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  action: {
    backgroundColor: "#1B57CB",
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
});