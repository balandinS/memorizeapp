import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen, WelcomeScreen} from '../screen'
import {WELCOME_SCREEN, HOME_SCREEN} from './types'
const Drawer = createDrawerNavigator();
const AppStack = ({navigation}) => {
    return (
       <Drawer.Navigator
       screenOptions={{
           headerShown: true,
           header: (props) => null,
           gestureEnabled: true
       }}
       initialRouteName={WELCOME_SCREEN}
       drawerStyle={{ width: 320 }}
       >
         <Drawer.Screen name={WELCOME_SCREEN} component={WelcomeScreen} options={{title: 'Feed'}}/>
         <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} options={{title: 'Home Screen'}}/>
       </Drawer.Navigator>
    )
}

export default AppStack


