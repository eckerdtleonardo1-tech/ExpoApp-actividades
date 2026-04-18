import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import Cont from './components/contador';
import Nom from './components/imput';

export default function App() {
  return(
    <View style={styles.container}>
      <Nom/>
      <Cont/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
