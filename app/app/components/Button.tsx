import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({value, typeBtn}: {value: string, typeBtn: 'number' | 'operator' | 'action'}) => {
  return (
    <TouchableOpacity style={[styles.btn, {
        backgroundColor: typeBtn === 'number' ? '#232323' : typeBtn === 'operator' ? '#FA4747' : '#8B5CF6'
    }]} onPress={() => {}}>
        <Text style={styles.btnText}>{value}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        width: 70,
        height: 70,
        borderRadius: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 30,
        color: '#fff'
    }
})