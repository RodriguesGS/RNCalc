import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({
    value,
    typeBtn,
    onPress,
    doubleBtn,
}: { 
    value: string, 
    typeBtn: 'number' | 'operator' | 'action'; 
    onPress: () => void
    doubleBtn?: boolean
}) => {
  return (
    <TouchableOpacity style={[styles.btn, doubleBtn && styles.doubleBtn, {
        backgroundColor: typeBtn === 'number' ? '#232323' : typeBtn === 'operator' ? '#FA4747' : '#8B5CF6'
    }]} onPress={onPress}>
        <Text style={styles.btnText}>{value}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width: '22%',
        height: '15%',
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 30,
        color: '#fff'
    },
    doubleBtn: {
        width: '48%'
    }
})