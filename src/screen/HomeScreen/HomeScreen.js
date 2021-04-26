import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../utilities/constans'
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})
