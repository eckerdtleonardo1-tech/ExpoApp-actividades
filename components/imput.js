import { View, Text, TextInput } from "react-native";
import { useState } from 'react';

export default function Nom() {

    const [nombre, setNombre] = useState("");


    return (
        <View>
            <TextInput
                placeholder="Escribí tu nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <Text>Nombre: {nombre}</Text>
        </View>
    )
}