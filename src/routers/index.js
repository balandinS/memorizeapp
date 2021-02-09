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
import { isLoginSelector } from '../store/selector'

const RootStack = createStackNavigator();

const RootNavigator = () => {
   const userInfo = useSelector(isLoginSelector)
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

