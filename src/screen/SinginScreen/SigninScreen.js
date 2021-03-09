import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import Text from '../../component/Text';
import Input from '../../component/InputText';
import {COLORS} from '../../utilities/constans';
import {values} from 'lodash';
const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Log into</Text>
        <Text style={styles.title}>your account</Text>
      </View>
      <View style={styles.containerForm}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.conatinerInpunts}>
              <Input
                label="E-mail"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <View style={{height:2, backgroundColor: 'rgb(247,247,247)'}}/>
              <Input
                label="Password"
                isPassword
                onChangeText={handleChange('password')}
                value={values.password}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.containerButtom}></View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'rgb(229, 222, 216)',
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  containerForm: {
    flex: 2,
  },
  conatinerInpunts: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
    flex: .5,
  },
  containerButtom: {
    flex: 1,
  },
  title: {
    fontSize: 31,
    fontWeight: 'bold',
    color: 'rgb(17 ,10, 8)',
  },
  containerEdit: {
    flex: 0.2,
    marginTop: 20,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
  },
  remember: {
    color: COLORS.peterriver,
    fontSize: 18,
  },
});
