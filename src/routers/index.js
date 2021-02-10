import React, { useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getStoredState } from 'redux-persist'
import { navigationRef } from './rootNavigation'
import  * as TYPES  from './types'
import { FadeInOutAnimation } from './config'

import {SignupScreen, SinginScreen} from '../screen'
import AppStack from './AppStack'
import { userInfoSelector } from '../store/selector'
import {signinAction} from '../store/login/LoginAction'
import AsyncStorage from '@react-native-async-storage/async-storage'
const RootStack = createStackNavigator();

const RootNavigator = () => {
    const userInfo = useSelector(userInfoSelector);
    const dispatch = useDispatch();
    useEffect(() => {
    //   if (userInfo.userToken == null) {
    //     dispatch(
    //       signinAction({
    //         id: 'dfdf',
    //         name: 'addad',
    //         avatar: 'adadad',
    //         isLogin: true,
    //         signWith: 'asdd',
    //       }),
    //     );
    //   }

    });
   
    return(
        <RootStack.Navigator
         headerMode="float"
         screenOptions={{...FadeInOutAnimation}}
        >
             { userInfo.userToken == null ? (
                <>
                   <RootStack.Screen name={TYPES.SIGNIN} options={{headerShown: false}} component={SinginScreen}/>
                   <RootStack.Screen name={TYPES.SIGNUP} component={SignupScreen}/>
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

