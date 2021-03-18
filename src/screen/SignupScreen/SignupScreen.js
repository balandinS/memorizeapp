import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import Text from '../../component/Text';
import Input from '../../component/InputText';
import UIButton from '../../component/Button';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {COLORS, SIGNUP_SCREEN_CONTENT} from '../../utilities/constans';
import {signupScheme} from '../../component/InputText/validationSchema';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = (props) => {
    const navigation = useNavigation();
    const handleSignup = () => navigation.navigate(SIGNUP)
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{SIGNUP_SCREEN_CONTENT.title}</Text>
        </View>
        <ScrollView style={styles.containerForm}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={signupScheme}
            onSubmit={(values) => {
              console.log(values);
            }}>
            {({
              values,
              handleChange,
              handleSubmit,
              setFieldTouched,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={styles.conatinerInpunts}>
                  <View style={styles.inputWrapp}>
                    <Input
                      label="Your Name"
                      onEndEditing={() => setFieldTouched('name')}
                      onChangeText={handleChange('name')}
                      value={values.name}
                      isErrMsg={{
                        isValid: touched.name && errors.name,
                        msg: errors.name,
                      }}
                    />
                  </View>
  
                  
                  <View style={styles.hr} />
                  <View style={styles.inputWrapp}>
                    <Input
                      label="E-mail"
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
                    <Input
                      label="Password"
                      isPassword
                      onChangeText={handleChange('password')}
                      onEndEditing={() => setFieldTouched('password')}
                      value={values.password}
                      isErrMsg={{
                        isValid: touched.password && errors.password,
                        msg: errors.password,
                      }}
                    />
                  </View>
  
                  <View style={styles.hr} />
                  <View style={styles.inputWrapp}>
                    <Input
                      label="Confirm Password"
                      isPassword
                      onChangeText={handleChange('passwordConfirm')}
                      onEndEditing={() => setFieldTouched('passwordConfirm')}
                      value={values.passwordConfirm}
                      isErrMsg={{
                        isValid: touched.passwordConfirm && errors.passwordConfirm,
                        msg: errors.passwordConfirm,
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    height: 110,
                    justifyContent: 'space-around'
                  }}>
                  <UIButton contnet="Sign Up" />
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  };
  
  export default SignupScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 8,
      backgroundColor: COLORS.beige,
    },
    containerTitle: {
      flex: 0.2,
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
    },
    containerForm: {
      flex: 3,
    },
    conatinerInpunts: {
      marginTop: 20,
      justifyContent: 'center',
      backgroundColor: COLORS.white,
      borderRadius: 10,
      flex: 0.35,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.3,
      elevation: 6
    },
    containerButtom: {
      flex: 1,
    },
    title: {
      fontSize: 31,
      fontWeight: 'bold',
      color: COLORS.black,
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
    hr: {
      height: 2,
      backgroundColor: COLORS.gray,
    },
    inputWrapp: {
      padding: 15,
      flex: 1,
    },
    descriptionConatiner: {
      flex: 0.3,
      justifyContent: 'center',
    },
    description: {
      marginTop: 20,
      color: COLORS.black,
      fontSize: 15,
      textAlign: 'center',
    },
    signup: {
      borderRadius: 30,
      alignItems: 'center',
      flex: 0.3,
      borderWidth: 1,
      borderColor: COLORS.blackLight,
    },
    socailGroup: {
      marginTop: 20,
      flex: 0.45,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    facebookBtn: {
      backgroundColor: COLORS.blue,
      flex: 0.3,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: COLORS.blue,
    },
    googleBtn: {
      backgroundColor: COLORS.red,
      borderRadius: 30,
      alignItems: 'center',
      flex: 0.3,
      borderWidth: 1,
      borderColor: COLORS.red,
    },
    icon: {
      textAlign: 'center',
    },
  });
  
