import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './Button';

const Calculator = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.screen}>
                <Text style={styles.screenText}>0</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.keyboard}>
                <Button value='AC' typeBtn='action'/>
                <Button value='⌫' typeBtn='action'/>
                <Button value='%' typeBtn='action'/>
                <Button value='÷' typeBtn='operator'/>
                <Button value='7' typeBtn='number'/>
                <Button value='8' typeBtn='number'/>
                <Button value='9' typeBtn='number'/>
                <Button value='x' typeBtn='operator'/>
                <Button value='6' typeBtn='number'/>
                <Button value='5' typeBtn='number'/>
                <Button value='4' typeBtn='number'/>
                <Button value='-' typeBtn='operator'/>
                <Button value='1' typeBtn='number'/>
                <Button value='2' typeBtn='number'/>
                <Button value='3' typeBtn='number'/>
                <Button value='+' typeBtn='operator'/>
                <Button value='0' typeBtn='number'/>
                <Button value='' typeBtn='number'/>
                <Button value='.' typeBtn='number'/>
                <Button value='=' typeBtn='operator'/>
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
        fontWeight: 400,
        color: '#B3B3B3'
    },

    keyboard: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        padding: 30
    }
})

export default Calculator;
