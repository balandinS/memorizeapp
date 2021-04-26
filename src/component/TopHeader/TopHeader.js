import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import LottieView from 'lottie-react-native'
import {COLORS } from '../../utilities/constans'
import { useColorSafeArea } from '../../utilities/hooks'
import { DrawerActions } from '@react-navigation/native';
const TopHeader = (props) => {
    useColorSafeArea(COLORS.white)

    const toggleDrawer = () => {
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleDrawer} style={styles.hamburgerContainer}>
               <LottieView loop={false} autoPlay style={{height: 60, width: 60}} source={require('../../assessts/animations/hamburgerAnimation.json')}/>
            </TouchableOpacity>
        </View>
    )
}

export default TopHeader

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: COLORS.white
    },
    hamburgerContainer: {
      flex: 1
    }
})
