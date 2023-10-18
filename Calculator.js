import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    };

    const clear = () => {
        setInput('');
        setResult('');
    };

    const calculate = () => {
        try {
            setResult(eval(input));
            setInput('')
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.input} selectable={true}>{input}</Text>
            <Text style={styles.result} selectable={true}>{result}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(7)}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(8)}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(9)}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput('/')}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(4)}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(5)}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(6)}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput('*')}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(1)}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(2)}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(3)}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput('-')}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={clear}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput(0)}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={calculate}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleInput('+')}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 5,
        backgroundColor: '#318CE7',
    },
    input: {
        fontSize: 50,
        marginBottom: 10,
        textAlign: 'right',
    },
    result: {
        fontSize: 50,
        marginBottom: 20,
        textAlign: 'right',
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
});

export default Calculator;
