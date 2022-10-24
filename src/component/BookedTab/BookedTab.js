import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import {FadeInOutAnimation} from '../../routers/config';
import {COLORS} from '../../utilities/constans';
import {verticalScale} from '../../utilities/screenUtilities';
import CustomeBookedTab from './CustomeBookedTab';
const TABS = {
  allItems: 'AllItmesTab',
  boardsTab: 'BoardsTab',
};

const Tab = createMaterialTopTabNavigator();

const AllItmesTab = () => {
  return <View />;
};

const BoardsTab = () => {
  return <View />;
};
function BookedTab() {
  return (
    <Tab.Navigator
      initialRouteName={TABS.allItems}
      tabBar={(props) => <CustomeBookedTab {...props} />}>
      <Tab.Screen
        options={{
          tabBarLabel: 'All items',
        }}
        name={TABS.allItems}
        component={AllItmesTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Boards',
        }}
        name={TABS.boardsTab}
        component={BoardsTab}
      />
    </Tab.Navigator>
  );
}

export default BookedTab;
