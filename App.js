import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [lower, setLower] = useState('')
  const [higher, setHigher] = useState('')

  function calculate() {
    setLower(Math.round((220-age) * 0.65))
    setHigher(Math.round((220-age) * 0.85))
  }


  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
        keyboardType='decimal-pad'
        value={age}
        onChangeText={text =>setAge(text)}
      />
      <Text>Hr limits</Text>
      <Text>{lower} - {higher} </Text>
      <StatusBar style="auto" />
      <Button onPress={calculate} title="Calculate"></Button>
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
