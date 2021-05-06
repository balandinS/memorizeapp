import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import * as TYPES from './types';
import {COLORS} from '../utilities/constans';
import {barStyleTab} from './config';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Tab = createMaterialBottomTabNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName={TYPES.HOME_SCREEN}
      activeColor={COLORS.black}
      inactiveColor={COLORS.gray_navigation}
      barStyle={barStyleTab}
      shifting={true}
      backBehavior="initialRoute"
      labeled>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name="bolt" color={color} size={focused ? 18 : 24} />
          ),
          tabBarLabel: 'Shop',
          barStyleTab: {
            flex: 1,
          },
        }}
        name={TYPES.HOME_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name="eye" color={color} size={focused ? 18 : 24} />
          ),
          tabBarLabel: 'Explore',
          barStyleTab: {
            flex: 1,
          },
        }}
        name={TYPES.EXPLORE_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: ({focused, color}) => (
            <Icon name="bookmark" color={color} size={focused ? 18 : 24} />
          ),
          barStyleTab: {
            flex: 1,
          },
        }}
        name={TYPES.BOOKED_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Icon name="user-circle" color={color} size={focused ? 18 : 24} />
          ),
          barStyleTab: {
            flex: 1,
          },
        }}
        name={TYPES.PROFILE_SCREEN}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeStack;
