/*import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function Tar() {
    
const [texto, setTexto] = useState('');
const [lista, setLista] = useState([]);

const agregar = () => {
    if (texto.trim("")) {
        setLista([...lista, texto]);
        setTexto('');
    }



}
}*/


import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function ToDoList() {
    const [tareaTexto, setTextoTarea] = useState('');
    const [ultTexto, setUltTexto] = useState([]);
    return (
        <View>
            <TextInput
                placeholder="Ingrese una tarea para agregar"
                value={tareaTexto}
                onChangeText={setTextoTarea}
            />
            
            <Button
                title="Agendar tarea"
                onPress={() => {
                    if (tareaTexto.length != 0) {
                        setUltTexto([...ultTexto, tareaTexto])
                    }
                    else {
                        alert("La tarea no puede estar vacía!")
                    }
                }
                }
            />

            <Button
                title="Eliminar ultima tarea agregada"
                onPress={() => setUltTexto([])}
            />

            {
                ultTexto.map((n, index) => <Text key={index}> {index} {n} </Text>)
            }


            {/* <Text>Última tarea agregada: {ultTexto}</Text>                 */}
            {/* <Text>Última tarea agregada: {ultTexto}</Text> */}
        </View>
    );
}