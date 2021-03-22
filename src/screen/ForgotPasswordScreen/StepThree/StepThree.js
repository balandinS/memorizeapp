import React from 'react';
import { StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import {forgotPasswordStepThree} from '../../../component/InputText/validationSchema';
import Input from '../../../component/InputText'
import UIButton from '../../../component/Button'
import { COLORS } from '../../../utilities/constans'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const StepThree = (props) => {

  const nexStep = (vales) => {
      console.log(vales)
      props.stepUp()
  }
  return (
    <View style={styles.conatiner}>
      <Formik
        initialValues={{
          passwordNew: '',
          passwordConfirm: '',
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
                <Icon name='lock' size={25} style={{marginRight: 20, marginBottom: 15}}/>
              <Input
                label="New Password"
                onEndEditing={() => setFieldTouched('passwordNew')}
                onChangeText={handleChange('passwordNew')}
                value={values.passwordNew}
                isErrMsg={{
                  isValid: touched.passwordNew && errors.passwordNew,
                  msg: errors.passwordNew,
                }}
              />
            </View>
            <View style={styles.hr} />
            <View style={styles.inputWrapp}>
                <Icon name='lock' size={40} style={{marginRight: 20, marginBottom: 15}}/>
              <Input
                label="Confirm Password"
                onEndEditing={() => setFieldTouched('passwordConfirm')}
                onChangeText={handleChange('passwordConfirm')}
                value={values.passwordConfirm}
                isErrMsg={{
                  isValid: touched.passwordConfirm && errors.passwordConfirm,
                  msg: errors.passwordConfirm,
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

export default StepThree;

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
