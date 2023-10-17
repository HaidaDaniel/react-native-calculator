import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Clipboard } from 'react-native-clipboard';



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
            <Text style={styles.input} selectable={true} >{input}</Text>
            <Text style={styles.result} selectable={true}>{result}</Text>
            <View style={styles.row}>
                <Button title="7" onPress={() => handleInput(7)} />
                <Button title="8" onPress={() => handleInput(8)} />
                <Button title="9" onPress={() => handleInput(9)} />
                <Button title="/" onPress={() => handleInput('/')} />
            </View>
            <View style={styles.row}>
                <Button title="4" onPress={() => handleInput(4)} />
                <Button title="5" onPress={() => handleInput(5)} />
                <Button title="6" onPress={() => handleInput(6)} />
                <Button title="*" onPress={() => handleInput('*')} />
            </View>
            <View style={styles.row}>
                <Button title="1" onPress={() => handleInput(1)} />
                <Button title="2" onPress={() => handleInput(2)} />
                <Button title="3" onPress={() => handleInput(3)} />
                <Button title="-" onPress={() => handleInput('-')} />
            </View>
            <View style={styles.row}>
                <Button title="C" onPress={clear} />
                <Button title="0" onPress={() => handleInput(0)} />
                <Button title="=" onPress={calculate} />
                <Button title="+" onPress={() => handleInput('+')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'right',
    },
    result: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Calculator;
