import React from 'react';
import { useDispatch } from 'react-redux'
import { StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {forgotPasswordStepOne} from '../../../component/InputText/validationSchema';
import Input from '../../../component/InputText'
import UIButton from '../../../component/Button'
import { COLORS } from '../../../utilities/constans'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { forgotPasswordStep1 } from '../../../store/forgotPassword/ForgotPasswordAction'

const StepOne = (props) => {
  
  const dispatch = useDispatch()
  const nexStep = (values) => {
       dispatch(forgotPasswordStep1(values))
       props.stepUp()
  }
  return (
    <View style={styles.conatiner}>
      <Formik
        initialValues={{
          email: '',
          phone: '',
        }}
        validationSchema={forgotPasswordStepOne}
        onSubmit={nexStep}
        >
        {({
          values,
          handleChange,
          handleSubmit,
          setFieldTouched,
          errors,
          touched,
          isValid,
        }) => (
          <View style={styles.containerSubmit}>
            <View style={styles.inputWrapp}>
                <Icon name='envelope' size={25} style={{marginRight: 20, marginBottom: 15}}/>
              <Input
                label="email"
                onEndEditing={() => setFieldTouched('email')}
                onChangeText={handleChange('email')}
                value={values.email}
                isErrMsg={{
                  isValid: touched.email && errors.email,
                  msg: errors.email,
                }}
              />
            </View>
            <View style={styles.hr} />
            <View style={styles.inputWrapp}>
                <Icon name='mobile' size={40} style={{marginRight: 20, marginBottom: 15}}/>
              <Input
                label="Phone"
                onEndEditing={() => setFieldTouched('phone')}
                onChangeText={handleChange('phone')}
                value={values.phone}
                isErrMsg={{
                  isValid: touched.phone && errors.phone,
                  msg: errors.phone,
                }}
              />
            </View>
            
            <View style={styles.hr} />
            <View style={{marginTop: 40}}>
               <UIButton onPress={handleSubmit} isDisable={!isValid}  contnet="Send" />
            </View>
            
           
          </View>
        )}
      </Formik>
    </View>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  inputWrapp: {
    padding: 15,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hr: {
    height: 2,
    backgroundColor: COLORS.gray
  },
  containerSubmit: {
    marginTop: 20,
    flex: .5,
    justifyContent: 'center',
    paddingHorizontal: 8,
  }
});
