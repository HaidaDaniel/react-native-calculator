/** @format */

import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [history, setHistory] = useState([])

  const handleInput = (value) => {
    setInput(input + value)
  }

  const clear = () => {
    setInput('')
    setResult('')
  }

  const calculate = () => {
    try {
      const expression = `${input} = ${eval(input)}`
      setResult(eval(input))
      setHistory([...history, expression])
      setInput('')
    } catch (error) {
      setResult('Error')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='blue' />
      <ScrollView style={styles.history}>
        {history.map((entry, index) => (
          <View key={index} style={styles.historyEntry}>
            <Text>{entry}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.input} selectable={true}>
            {input}
          </Text>
        </View>
        <View style={styles.buttonDelete}>
          <TouchableOpacity onPress={clear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.result} selectable={true}>
          {result}
        </Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 5,
    backgroundColor: '#318CE7',
  },
  input: {
    fontSize: 50,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    textAlign: 'right',
    backgroundColor: '#EB4C42',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  inputBox: {
    width: '75%',
  },
  buttonDelete: {
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    backgroundColor: '#F07427',
    borderRadius: 10,
    width: '25%',
  },
  result: {
    flex: 1,
    fontSize: 50,
    paddingHorizontal: 10,
    textAlign: 'right',
    backgroundColor: '#CC397B',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '22%',
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: '#F07427',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 50,
  },
  history: {
    maxHeight: 150,
  },
  historyEntry: {
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
})

export default Calculator
