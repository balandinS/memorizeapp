import { values } from 'lodash-es'
import React, {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { forgotPasswordSelector } from '../../store/selector'
import { StyleSheet, TextInput, View } from 'react-native'
import { COLORS } from '../../utilities/constans'
import PropTypes from 'prop-types'
const InputOtp = ({handleUpdateOtp, nextStep}) => {
    const userDetails = useSelector(forgotPasswordSelector)
    const [ otp , setOtp ] = useState([])
    const otpTextInput =  useRef([]).current
    useEffect(() => {
        otp.length === 0 &&  otpTextInput[0].focus()
    })
    const renderInputs = () =>  {
        const inputs = Array(4).fill(0)
        const txt = inputs.map((input, index) => (
            <View key={index} style={[styles.input]}>
                <TextInput
                  maxLength={1}
                  onChangeText={value => focusNext(index, value)}
                  style={styles.inputotp}
                  autoFocus 
                  keyboardType='numeric'
                  onKeyPress={e => focusPrevius(index, e.nativeEvent.key)}
                  secureTextEntry
                  ref={ref => {
                      otpTextInput[index] = ref
                    }}
                />
            </View>
        ))

        return txt
    }
    const focusNext = (index, value) => {
       if( index < otpTextInput.length -1 && value) {
           otpTextInput[index + 1].focus()
       }
       if(index === otpTextInput.length -1){
           otpTextInput[index].blur()
           
       }
       if(!!value) {
        otpTextInput[index].setNativeProps({
            style: {
                backgroundColor: COLORS.black
            }
           })
       } else {
        otpTextInput[index].setNativeProps({
            style: {
                backgroundColor: COLORS.graylight
            }
           })
       }
       const otpUpated = otp
       otpUpated[index] = value;
       setOtp(otpUpated)
       handleUpdateOtp(otp.join(''))
       index === otpTextInput.length -1 && nextStep()
    }
    const focusPrevius = (index , key) => {
       if(key === 'Backspace' && index !== 0){
           otpTextInput[index - 1].focus()
       }
    }

    return (
        <View style={styles.container}>
            <View style={styles.otpContainer}>
               {renderInputs()}
            </View>
        </View>
    )
}

InputOtp.propTypes = {
    handleUpdateOtp: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
}
export default InputOtp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8
    },
    otpContainer : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    input: {
        width: 25,
        height: 25,
        borderRadius: 25/2,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputotp : {
      color: COLORS.black,
      height:25,
      width: 25,
      borderRadius: 25/2,
      textAlign: 'center',
      backgroundColor: COLORS.graylight
    }
})
