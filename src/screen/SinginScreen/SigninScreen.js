import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import Text from '../../component/Text';
import Input from '../../component/InputText';
import UIButton from '../../component/Button';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {COLORS, SIGNIN_SCREEN_CONTENT} from '../../utilities/constans';
import {signinScheme} from '../../component/InputText/validationSchema';
import {useNavigation} from '@react-navigation/native';
import {SIGNUP, FORGOT_PASSWORD} from '../../routers/types';
import {useColorSafeArea} from '../../utilities/hooks';
import {
  loginSocailFacebookAction,
  signinWithEmailAndPasswordAction,
} from '../../store/userdata/UserAction';
import * as TYPES from '../../store/userdata/UserTypes';
const SigninScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useColorSafeArea(COLORS.beige);
  const handleSignup = () => navigation.navigate(SIGNUP);
  const handleForgotPassword = () => navigation.navigate(FORGOT_PASSWORD);
  const handleLoginFaceBook = () => dispatch(loginSocailFacebookAction());
  const onSubmitAction = (values) => {
    dispatch(signinWithEmailAndPasswordAction(values.email, values.password));
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{SIGNIN_SCREEN_CONTENT.title}</Text>
      </View>
      <ScrollView style={styles.containerForm}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          validationSchema={signinScheme}
          onSubmit={onSubmitAction}>
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
                    handleForgotPassword={handleForgotPassword}
                    onChangeText={handleChange('password')}
                    onEndEditing={() => setFieldTouched('password')}
                    value={values.password}
                    isErrMsg={{
                      isValid: touched.password && errors.password,
                      msg: errors.password,
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 20,
                  height: 110,
                  justifyContent: 'space-around',
                }}>
                <UIButton
                  onPress={handleSubmit}
                  contnet="Log In"
                  isDisable={!isValid}
                />
                <UIButton
                  onPress={handleSignup}
                  propStyle={styles.signup}
                  contnet="Sign Up"
                  textColor={COLORS.blackLight}
                />
              </View>
              <View style={styles.descriptionConatiner}>
                <Text style={styles.description}>
                  {SIGNIN_SCREEN_CONTENT.description}
                </Text>
                <View style={styles.socailGroup}>
                  <UIButton
                    propStyle={styles.facebookBtn}
                    onPress={handleLoginFaceBook}
                    icon={
                      <Icon
                        name="facebook"
                        size={26}
                        color={COLORS.white}
                        style={styles.icon}
                      />
                    }
                  />
                  <UIButton
                    propStyle={styles.googleBtn}
                    icon={
                      <Icon
                        name="google"
                        size={26}
                        color={COLORS.white}
                        style={styles.icon}
                      />
                    }
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: COLORS.beige,
  },
  containerTitle: {
    flex: 0.3,
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
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    elevation: 1,
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
