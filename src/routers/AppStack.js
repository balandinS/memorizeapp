import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screen';
import { HOME_SCREEN } from './types';
import TopHeader from '../component/TopHeader';
import { COLORS } from '../utilities/constans'
import DrawerSideMenu from '../component/DrawerSideMenu'

const Drawer = createDrawerNavigator();
const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        header: (props) => <TopHeader navigation={navigation} {...props} />,
        gestureEnabled: true,
      }}
      initialRouteName={HOME_SCREEN}
      drawerContent={(props) => <DrawerSideMenu  {...props} />}
      drawerStyle={{width: 250}}
      drawerContentOptions={{
        activeTintColor: COLORS.black,
        activeBackgroundColor: COLORS.beige,
        itemStyle: {marginVertical: 10},
      }}>
      <Drawer.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
