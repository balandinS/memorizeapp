import React, {useRef} from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../Text'
import {NOOP} from '../../utilities/utilities'
import { COLORS } from '../../utilities/constans'


const INITAIL_STYLE_BTN = {
    backgroundColor: COLORS.blackLight,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.blackLight
 }

const UIButton = ({contnet='', icon, onPress, propStyle=INITAIL_STYLE_BTN, textColor, isDisable}) => {
    const txtColor = useRef(!!textColor ? textColor : COLORS.white)
    const handleOnPress= () => {
         if(typeof onPress === "function"){
            onPress()
         }else {
             NOOP()
         }
    }
    return (
        <TouchableOpacity onPress={handleOnPress} style={[styles.containerButton, propStyle]} disabled={isDisable}>
           {!!contnet && <Text style={[styles.text,  {color : txtColor.current}]}>{contnet}</Text>}
           {icon && icon}
        </TouchableOpacity>
    )
}

export default UIButton

const styles = StyleSheet.create({
    containerButton: {
        minHeight: 44,
        minWidth: 150,
        justifyContent: 'center',
        paddingVertical: 8,
    },
    text: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 18
    }
})
