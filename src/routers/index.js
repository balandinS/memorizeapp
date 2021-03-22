import React, { useEffect} from 'react'
import {useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation'
import  * as TYPES  from './types'
import { FadeInOutAnimation, signupOptionNavigate, forgotPasswordOptionNavigate } from './config'

import {SignupScreen, SinginScreen, ForgotPasswordScreen} from '../screen'
import AppStack from './AppStack'
import { userInfoSelector } from '../store/selector'
import { requestUserPermission } from '../utilities/notification'
import { OS } from '../utilities/utilities'
const RootStack = createStackNavigator();

const RootNavigator = () => {
    const userInfo = useSelector(userInfoSelector);
    useEffect(() => {
       OS === 'ios' && requestUserPermission()
    })
    return(
        <RootStack.Navigator
         headerMode="float"
         screenOptions={{...FadeInOutAnimation}}
        >
             { userInfo.userToken == null ? (
                <>
                   <RootStack.Screen name={TYPES.SIGNIN} options={{headerShown: false}} component={SinginScreen}/>
                   <RootStack.Screen name={TYPES.SIGNUP} options={signupOptionNavigate} component={SignupScreen}/>
                   <RootStack.Screen name={TYPES.FORGOT_PASSWORD} options={forgotPasswordOptionNavigate} component={ForgotPasswordScreen}/>
                </>
             ):(
                <>
                  <RootStack.Screen name={TYPES.APP_STACK} options={{headerShown: false}} component={AppStack}/>
                </>
             )
            }
           
            
        </RootStack.Navigator>
    )
}
const Root = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootNavigator />
        </NavigationContainer>
    )
}

export default Root

