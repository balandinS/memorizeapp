import React, {useEffect, useCallback} from 'react';
import { useIsFocused } from '@react-navigation/native'
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FadeInOutAnimation} from '../../routers/config';
import {COLORS} from '../../utilities/constans';
import { dataTabsSelector } from '../../store/selector';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoriesAction } from '../../store/HomeScreen/HomeAction'
import SubCategorie from '../SubCategorie'
const Tab = createMaterialTopTabNavigator();

const TAB_WOMEM = 'WOMEM';
const TAB_MEN = 'MEM';
const TAB_CHILDREN = 'CHILDREN';
const TAB_SHOES = 'SHOES';
const TAB_ACCESSORIES = 'ACCESSORIES';



const RenderTab = (props) => {

  const isFocus = useIsFocused()
  const dispatch = useDispatch()
  const fetch = useCallback(() => {
      dispatch(fetchCategoriesAction(props.data.tabLabel))
  },[props.data])

  useEffect(() => {
    if(isFocus){
      fetch()
    }
    
  },[isFocus])

  const renderSubcategories = () => {
      const { values } = props.data
      if(values.subcategories.length === 0) {
        return null
      }

      return <SubCategorie />
  }
  return(
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
       {renderSubcategories()}
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
}
const TabCategories = () => {
  const dataTabs = useSelector(dataTabsSelector)
  return (
    <Tab.Navigator
     
      initialRouteName={TAB_WOMEM}
      screenOptions={{
        ...FadeInOutAnimation,
      }}
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: COLORS.white,
        inactiveTintColor: 'rgb(199, 199, 199)',
        indicatorStyle: {
          height: 0,
        },
        labelStyle: {
            fontSize: 14,
            textAlign: 'center',
        },
        style:{
            borderBottomColor: COLORS.graydark,
            borderTopColor: COLORS.graydark,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            backgroundColor: COLORS.graywhithe,
            height: 55,
            justifyContent: 'center'
         }
      }}>
      {dataTabs.map((data, index) => {

          return (
              <Tab.Screen
               key={data.tabType+index}
               name={data.tabType}
               children={(props) => <RenderTab data={data} {...props}/>}
               options={{
                   tabBarLabel: ({ tintColor, focused, activeTintColor }) => (
                    focused ? 
                    <View style={styles.activeTabContainer}>
                        <Text style={styles.activeTab}>{data.tabLabel}</Text>
                    </View>
                   
                    :
                    <View style={styles.inactiveTabContainer}>
                        <Text style={styles.inactiveTab}>{data.tabLabel}</Text>
                    </View>
                   ) ,
               }}
              />
          )
      })}
    </Tab.Navigator>
  );
};

export default TabCategories;

const styles = StyleSheet.create({
    activeTabContainer: {
        width: 125,
        height: 30,
        overflow: 'hidden',
        backgroundColor: COLORS.graylightdark,
        borderRadius: 20,
        justifyContent: 'center'
    },
    activeTab: {
        fontSize: 15,
        width: 125,
        color: COLORS.white,
        textAlign: 'center'
    },
    inactiveTabContainer: {
        width: 125,
        height: 30,
        overflow: 'hidden',
        borderRadius: 20,
        justifyContent: 'center'
    },
    inactiveTab: {
        fontSize: 15,
        width: 125,
        textAlign: 'center',
        color: 'rgb(199, 199, 199)'
    }
});
