import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';



export default function App() {
    const [contador, setContador] = useState(0);

    const sumar = ()=>{setContador(contador + 1)};
    const restar =()=>{



if ((contador - 1) >= 0) {
          setContador(contador - 1)

}


      
      
    
    
    
    
    
    };
   
    return (
        <View style = {styles.container}>
            <Text>Contador: {contador}</Text>


            <Button
                title="Sumar"
                onPress={() => sumar() }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
