import React from 'react'
import { StyleSheet,  View } from 'react-native'
import { COLORS } from '../../utilities/constans'
import HeaderWithImage from '../../component/HeaderWithImage'
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{height: 250}}>
               <HeaderWithImage />
            </View>
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
