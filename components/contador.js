import { View, Text, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
    const [contador, setContador] = useState(0);


    return (
        <View>
            <Text>Contador: {contador}</Text>


            <Button
                title="Sumar"
                onPress={() => setContador(contador + 1)}
            />
        </View>
    );
}
