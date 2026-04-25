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


const eliminarTarea = (id) => {
    // Filtra el arreglo: deja todos menos el que coincide con el ID
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevasTareas);
  };


  return (
    <View style={styles.container}>

      {/* <InputTarea onQuitarTarea={eliminarTarea} /> */}
      <InputTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />

      

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


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


// export default function App() {
//   // Estados
//   const [tarea, setTarea] = useState('');
//   const [listaTareas, setListaTareas] = useState([]);


//   // Agregar Tarea
//   const agregarTarea = () => {
//     if (tarea.trim()) {
//       setListaTareas([...listaTareas, { id: Date.now().toString(), texto: tarea, completada: false }]);
//       setTarea('');
//     }
//   };


//   // Eliminar Tarea
//   const eliminarTarea = (id) => {
//     setListaTareas(listaTareas.filter((item) => item.id !== id));
//   };


//   // Marcar como completada
//   const alternarCompletada = (id) => {
//     setListaTareas(
//       listaTareas.map((item) =>
//         item.id === id ? { ...item, completada: !item.completada } : item
//       )
//     );
//   };


//   return (
//     <View style={styles.contenedor}>
//       <Text style={styles.titulo}>Lista de Tareas ✅</Text>


//       <TextInput
//         style={styles.input}
//         placeholder="Escribe una tarea..."
//         value={tarea}
//         onChangeText={setTarea}
//       />


//       <Button title="Agregar Tarea" onPress={agregarTarea} />


//       <FlatList
//         data={listaTareas}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={[styles.tarea, item.completada && styles.tareaCompletada]}
//             onPress={() => alternarCompletada(item.id)}
//             onLongPress={() => eliminarTarea(item.id)}
//           >
//             <Text style={styles.textoTarea}>{item.texto}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   contenedor: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   titulo: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 8,
//     borderRadius: 5,
//   },
//   tarea: {
//     padding: 15,
//     marginVertical: 5,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 5,
//   },
//   tareaCompletada: {
//     backgroundColor: '#b0d4b0',
//     textDecorationLine: 'line-through',
//   },
//   textoTarea: {
//     fontSize: 16,
//   },
// });
