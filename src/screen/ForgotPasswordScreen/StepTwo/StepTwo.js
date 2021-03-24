import React, { useState } from 'react'
import { StyleSheet, View} from 'react-native'
import UILink from '../../../component/UILink'
import InputOtp from '../../../component/InputOtp'
const StepTwo = (props) => {
     const [otp, updateOtp] = useState('')
     const handleUpdateOtp = (updatedOtp) => {
        updateOtp(updatedOtp)
    }
  
    const nextStep = (vales) => {
        props.stepUp()
    }
    return (
        <View style={styles.container}>
            <View style={styles.otp}>
              <InputOtp handleUpdateOtp={(code) => handleUpdateOtp(code)} nextStep={nextStep}/>
              <UILink>Send a new code</UILink>
            </View>
        </View>
    )
}

export default StepTwo

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    otp: {
        flex: .5
    }
})
