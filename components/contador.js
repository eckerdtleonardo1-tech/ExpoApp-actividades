
import { View, Text, Button } from 'react-native';
import { useState } from 'react';


export default function Cont() {
    const [contador, setContador] = useState(0);
    const sumar = () => { setContador(contador + 1) };

    const restar = () => {
        if ((contador - 1) >= 0) {
            setContador(contador - 1)}}

    return (
        <View>
            <Text>Contador: {contador}</Text>

            <Button
                title="Sumar"
                onPress={() => sumar()}
            />
            <Button
                title="Restar"
                onPress={() => restar()}
            />
            <Button
                title="Reset"
                onPress={() => setContador(0)}
            />
        </View>
    );
}
