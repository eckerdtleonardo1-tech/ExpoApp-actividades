import { View, TouchableOpacity, Button } from 'react-native';
import Tarea from './Tarea';

export default function ListaTareas({ tareas, eliminarTarea }) {
    return (
        <View>
            {tareas.map(t => (

                <View key={t.id} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Tarea key={t.id} texto={t.texto} />

                    <Button
                        title="Eliminar"
                        onPress={() => {
                            eliminarTarea(t.id);

                        }}
                    />

                </View>
            ))}
        </View>
    );
}
