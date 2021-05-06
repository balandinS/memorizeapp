import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import {HOME_STACK} from './types';
import TopHeader from '../component/TopHeader';
import {COLORS} from '../utilities/constans';
import DrawerSideMenu from '../component/DrawerSideMenu';

const Drawer = createDrawerNavigator();
const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        header: (props) => <TopHeader navigation={navigation} {...props} />,
        gestureEnabled: true,
      }}
      initialRouteName={HOME_STACK}
      drawerContent={(props) => <DrawerSideMenu {...props} />}
      drawerStyle={{width: 250}}
      drawerContentOptions={{
        activeTintColor: COLORS.black,
        activeBackgroundColor: COLORS.beige,
        itemStyle: {marginVertical: 10},
      }}>
      <Drawer.Screen
        name={HOME_STACK}
        component={HomeStack}
        options={{title: 'Home Screen'}}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
