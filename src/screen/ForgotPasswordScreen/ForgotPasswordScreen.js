import React, {useEffect} from 'react';

import {StyleSheet, View, LayoutAnimation, UIManager} from 'react-native';
import {COLORS, STEP1, STEP2, STEP3} from '../../utilities/constans';
import {useColorSafeArea, useSteps} from '../../utilities/hooks';
import {OS} from '../../utilities/utilities';
import Text from '../../component/Text';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

if (OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const data = [
  {
      id: STEP1,
      title: 'Forgot Password?',
      subtitle: 'if you need help reseting your password,\nwe can help by sending you a link to reset it',
      done: false
  },
  {
      id: STEP2,
      title: 'Enter the Code\nto Verify Your Phone',
      subtitle: 'We have sent you an SMS with acode to the number',
      done: false
  },
  {
      id: STEP3,
      title: 'Reset Youre Password',
      done: false
  }
]
const ForgotPasswordScreen = () => {
  const [steps, stepUp] = useSteps(data);
  useColorSafeArea(COLORS.white);
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [steps.currentStepIndex]);
  const subtitle = `${steps.data[steps.currentStepIndex].subtitle}`;
  let CurrentStep = null;

  switch (steps.data[steps.currentStepIndex].id) {
    case STEP1:
      CurrentStep = <StepOne stepUp={stepUp} />;
      break;
    case STEP2:
      CurrentStep = <StepTwo stepUp={stepUp} />;
      break;
    case STEP3:
      break;

    default:
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {steps.data[steps.currentStepIndex].title}
        </Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <View style={styles.bodyConatiner}>{CurrentStep}</View>
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
  },
  subtitle: {
    color: COLORS.graydark,
    fontSize: 15,
    fontWeight: 'normal',
    padding: 10,
  },
  bodyConatiner: {
    flex: 6,
  },
});
