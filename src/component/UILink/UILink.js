import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../../utilities/constans'

const UILink = ({children}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

export default UILink

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 2,
        height: 50

    },
    text: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationColor: COLORS.blackLight,
        color: COLORS.blackLight,
        fontSize: 16,
        fontWeight: '400'
    }
})
