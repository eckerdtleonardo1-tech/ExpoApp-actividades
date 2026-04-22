import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';


export default function InputTarea({ onAgregar }) {
    const [texto, setTexto] = useState('');


    return (
        <View>
            <TextInput
                placeholder="Nueva tarea"
                value={texto}
                onChangeText={setTexto}
            />


            <Button
                title="Agregar"
                onPress={() => {
                    onAgregar(texto);
                    setTexto('');
                }}
            />
        </View>
    );
}
