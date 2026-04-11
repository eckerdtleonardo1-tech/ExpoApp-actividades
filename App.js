import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Perfil from './components/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>perfiles:</Text>
      <StatusBar style="auto" />
      <Perfil nombre="Ana" edad={16} />  
      <Perfil nombre="fabri" edad={20}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
