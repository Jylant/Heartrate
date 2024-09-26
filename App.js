import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0)
  const [limits, setLimits] = useState('')

  
  const calculate = () => {
    const max = (220-age) * 0.85
    const min = (220-age) * 0.65
    const result = min.toFixed(0) + " - " + max.toFixed(0)
    setLimits(result)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
      style={styles.field} 
      placeholder="Enter your age"
      value={age}
      onChangeText={text => setAge(text)}
      keyboardType="number-pad" 
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button title="Calculate" style={styles.button} onPress={calculate} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
    marginTop: 30,
    marginLeft: 6,
    marginRight: 10,
  },
  field: {
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  },
});
