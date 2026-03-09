import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './Button';

const Calculator = () => {
    const [firstValue, setFirstValue] = useState('')
    const [displayValue, setDisplayValue] = useState('0')
    const [operator, setOperator] = useState('')
    const [reset, resetDisplay] = useState(false)

    const handleNumberInput = (num: string) => {
        if (reset) {
            setDisplayValue(num)
            resetDisplay(false)
            return
        }

        if (displayValue === '0') {
            setDisplayValue(num)
        } else {
            setDisplayValue(displayValue + num)
        }
    }

    const handleOperatorInput = (op: string) => {
        setOperator(op)
        setFirstValue(displayValue)
        setDisplayValue('0')
        resetDisplay(false)
    }

    const handleCalculation = () => {
        const num1 = parseFloat(firstValue)
        const num2 = parseFloat(displayValue)

        switch (operator) {
            case '+':
                setDisplayValue((num1 + num2).toString())
                break
            case '-':
                setDisplayValue((num1 - num2).toString())
                break
            case '*':
                setDisplayValue((num1 * num2).toString())
                break
            case '%':
                setDisplayValue((num1 % num2).toString())
                break
            case '/':
                if (num2 === 0) {
                    setDisplayValue("Error!")
                    break
                }

                setDisplayValue((num1 / num2).toString())
                break
            default:
                return num2.toString()
        }

        setOperator('')
        setFirstValue('')
        resetDisplay(true)
    }

    const handleClear = () => {
        setDisplayValue('0')
        setOperator('')
        setFirstValue('')
        resetDisplay(false)
    }

    const handleDelete = () => {
        if (displayValue.length === 1) {
            setDisplayValue('0')
        } else {
            setDisplayValue(displayValue.slice(0, -1))
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.screen}>
                <Text style={styles.minScreenText}>{firstValue + operator}</Text>
                <Text style={styles.screenText}>{displayValue}</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.keyboard}>
                <Button value='AC' typeBtn='action' onPress={() => handleClear()}/>
                <Button value='⌫' typeBtn='action' onPress={() => handleDelete()}/>
                <Button value='%' typeBtn='action' onPress={() => handleOperatorInput('%')}/>
                <Button value='÷' typeBtn='operator' onPress={() => handleOperatorInput('/')}/>

                <Button value='7' typeBtn='number' onPress={() => handleNumberInput('7')}/>
                <Button value='8' typeBtn='number' onPress={() => handleNumberInput('8')}/>
                <Button value='9' typeBtn='number' onPress={() => handleNumberInput('9')}/>
                <Button value='x' typeBtn='operator' onPress={() => handleOperatorInput('*')}/>

                <Button value='4' typeBtn='number' onPress={() => handleNumberInput('4')}/>
                <Button value='5' typeBtn='number' onPress={() => handleNumberInput('5')}/>
                <Button value='6' typeBtn='number' onPress={() => handleNumberInput('6')}/>
                <Button value='-' typeBtn='operator' onPress={() => handleOperatorInput('-')}/>

                <Button value='1' typeBtn='number' onPress={() => handleNumberInput('1')}/>
                <Button value='2' typeBtn='number' onPress={() => handleNumberInput('2')}/>
                <Button value='3' typeBtn='number' onPress={() => handleNumberInput('3')}/>
                <Button value='+' typeBtn='operator' onPress={() => handleOperatorInput('+')}/>

                <Button value='0' typeBtn='number' doubleBtn onPress={() => handleNumberInput('0')}/>
                <Button value='.' typeBtn='number' onPress={() => handleNumberInput('.')}/>
                <Button value='=' typeBtn='operator' onPress={() => handleCalculation()}/>
            </SafeAreaView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F0F0F'
    },
    
    screen: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    screenText: {
        fontSize: 70,
        fontWeight: '400',
        color: '#B3B3B3'
    },
    minScreenText: {
        fontSize: 28,
        fontWeight: '300',
        color: '#979797ff',
    },
    keyboard: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',   
        alignContent: 'space-evenly',
        gap: 12,
        padding: 16
    }
})

export default Calculator;
