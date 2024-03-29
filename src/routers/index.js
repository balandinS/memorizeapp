import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './rootNavigation';
import * as TYPES from './types';
import {
  FadeInOutAnimation,
  signupOptionNavigate,
  forgotPasswordOptionNavigate,
} from './config';

import {SignupScreen, SinginScreen, ForgotPasswordScreen} from '../screen';
import AppStack from './AppStack';
import {userInfoSelector} from '../store/selector';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const userInfo = useSelector(userInfoSelector);

  return (
    <RootStack.Navigator
      headerMode="float"
      screenOptions={{...FadeInOutAnimation}}>
      {!userInfo.refreshToken ? (
        <React.Fragment>
          <RootStack.Screen
            name={TYPES.SIGNIN}
            options={{headerShown: false}}
            component={SinginScreen}
          />
          <RootStack.Screen
            name={TYPES.SIGNUP}
            options={signupOptionNavigate}
            component={SignupScreen}
          />
          <RootStack.Screen
            name={TYPES.FORGOT_PASSWORD}
            options={forgotPasswordOptionNavigate}
            component={ForgotPasswordScreen}
          />
        </React.Fragment>
      ) : (
        <RootStack.Screen
          name={TYPES.APP_STACK}
          options={{headerShown: false}}
          component={AppStack}
        />
      )}
    </RootStack.Navigator>
  );
};
const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Root;
