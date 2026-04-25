import { useState } from 'react';
import { View, TextInput, Button, map } from 'react-native';
import Tarea from './Tarea';

export default function InputTarea({ onAgregar, onQuitarTarea }) {
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
