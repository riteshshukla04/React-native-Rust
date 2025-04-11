/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import NativeMultiply from './specs/NativeMultiply';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [result, setResult] = React.useState<number | null>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleMultiply = () => {
    if (!firstNumber || !secondNumber) return;
    const num1 = parseInt(firstNumber, 10);
    const num2 = parseInt(secondNumber, 10);
    const multiplyResult = NativeMultiply.multiply(num1, num2);
    setResult(multiplyResult);
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? Colors.white : Colors.black }]}>
          Multiply Numbers
        </Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: isDarkMode ? Colors.white : Colors.black }]}
            value={firstNumber}
            onChangeText={setFirstNumber}
            keyboardType="numeric"
            placeholder="Enter first number"
            placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
          />
          <TextInput
            style={[styles.input, { color: isDarkMode ? Colors.white : Colors.black }]}
            value={secondNumber}
            onChangeText={setSecondNumber}
            keyboardType="numeric"
            placeholder="Enter second number"
            placeholderTextColor={isDarkMode ? Colors.light : Colors.dark}
          />
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handleMultiply}
        >
          <Text style={styles.buttonText}>Multiply</Text>
        </TouchableOpacity>

        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={[styles.resultText, { color: isDarkMode ? Colors.white : Colors.black }]}>
              Result: {result}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    gap: 15,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
  },
  resultText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;
