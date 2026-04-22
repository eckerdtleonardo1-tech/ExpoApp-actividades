 import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
  import { useState } from 'react';

import InputTarea from './componentes/InputTareas';
import ListaTareas from './componentes/ListaTareas';

export default function App() {


 const [tareas, setTareas] = useState([]);
// Función:
const agregarTarea = (texto) => {
  setTareas([...tareas, { id: Date.now(), texto }]);
};

  return (
    <View style={styles.container}>

      <InputTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} />


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
