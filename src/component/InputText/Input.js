import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import Text from '../Text';
import {COLORS} from '../../utilities/constans';
import {SIGNIN, SIGNUP} from '../../routers/types';
import { useRoute } from '@react-navigation/native';

const Input = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const labelAnime = useRef(new Animated.Value(!props.value ? 1 : 0)).current;
  const refInput = useRef(null);
  const handleOnFocus = () => setIsFocus(true);
  const handleOnBlur = () => setIsFocus(false);

  useEffect(() => {
    Animated.timing(labelAnime, {
      useNativeDriver: true,
      duration: 130,
      toValue: isFocus || props.value ? 1 : 0,
      easing: Easing.linear,
    }).start();
  });

  const route = useRoute();


  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.label,
          {
            transform: [
              {
                translateY: labelAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -25],
                }),
              },
              {
                translateX: labelAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -6],
                }),
              },
              {
                scale: labelAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
            ],
            zIndex: 1,
          },
        ]}
        onPress={() => refInput.current.focus()}>
        {props.label}
      </Animated.Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput
          ref={refInput}
          secureTextEntry={props.isPassword}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          value={props.value}
          onEndEditing={props.onEndEditing}
          style={styles.input}
          onChangeText={(text) => props.onChangeText(text)}
        />
        {props.isPassword && route.name === SIGNIN && (
          <TouchableOpacity
            onPress={props.handleForgotPassword}
            style={{alignItems: 'center', justifyContent: 'center', width: 70}}>
            <Text style={styles.forgot}>Forgot?</Text>
          </TouchableOpacity>
        )}
      </View>
      {props.isErrMsg.isValid && props.isErrMsg.msg && (
        <Text style={styles.errorMsg}>*{props.isErrMsg.msg}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {
    position: 'absolute',
    fontSize: 18,
    left: 0,
    lineHeight: 20,
    color: 'rgb(145, 145, 145)',
  },
  input: {
    height: 35,
    minWidth: 250,
  },
  errorMsg: {
    fontSize: 12,
    color: COLORS.red,
  },
  forgot: {
    fontSize: 15,
    lineHeight: -5,
    color: COLORS.graydark,
  },
});
