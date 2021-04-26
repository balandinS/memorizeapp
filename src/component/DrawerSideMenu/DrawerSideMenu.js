import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../utilities/constans';
import {userInfoSelector} from '../../store/selector';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

const Avatar = () => {
  return (
    <View
      style={{
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: COLORS.gray,
      }}></View>
  );
};
const UserName = () => {
  const nick = useSelector(userInfoSelector)?.email
    ? useSelector(userInfoSelector)?.email
    : 'Stranger';

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text>{nick}</Text>
    </View>
  );
};
const DrawerSideMenu = (props) => {
  useEffect(() => {
    console.log('DrawerSideMenu --> ', props);
  }, []);
  return (
    <>
      <View style={styles.header}>
        <Avatar />
        <UserName />
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{flexGrow: 1, width: '100%'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </>
  );
};

export default DrawerSideMenu;

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: COLORS.beige,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: COLORS.gray,
    borderBottomEndRadius: 3,
    borderBottomWidth: 1,
  },
  body: {
    flex: 1,
  },
});
