import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Animated, Easing} from 'react-native';
import {COLORS} from '../../utilities/constans';
const Input = (props) => {
  const [isFocus, setIsFocus] = useState(false);
  const labelAnime = useRef(new Animated.Value(!props.value ? 1 : 0)).current
  const refInput = useRef(null)
  const handleOnFocus = () => setIsFocus(true);
  const handleOnBlur = () => setIsFocus(false);
  

  useEffect(() => {
      Animated.timing(labelAnime,{
          useNativeDriver: true,
          duration: 130,
          toValue: isFocus || props.value ? 1 : 0,
          easing: Easing.linear
      }).start()
  })
  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, {
          transform:[{
            translateY: labelAnime.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -25],
            }),
           
            },
          {
            scale: labelAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [1, .8],
          })
          }],
            zIndex: 1,
        }]}
        onPress={()=> refInput.current.focus()}
        >{props.label}</Animated.Text>
      <TextInput
        ref={refInput}
        secureTextEntry={props.isPassword}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        value={props.value}
        style={styles.input}
        onChangeText={(text) => props.onChangeText(text)}
      />
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
    padding: 2,
    paddingHorizontal: 3,

    color: 'rgb(145, 145, 145)',
    
  },
  input: {
    height: 35,
  },
});
