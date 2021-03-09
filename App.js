/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Alert
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ReduxStore from './src/store';
import Router from './src/routers'
const App: () => React$Node = () => {

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.statusBarBG} />
      <StatusBar
        backgroundColor='rgb(229, 222, 216)'
        translucent={false}
        hidden={false}
        barStyle="dark-content"
      />
      <Provider store={ReduxStore.store}>
        <PersistGate loading={null} persistor={ReduxStore.persistor}>
          <SafeAreaView style={styles.safeTop} />
          <SafeAreaView style={styles.safeBottom}>
          <Router />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(229, 222, 216)',
  },
  statusBarBG: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'red',
    zIndex: 3,
  },
  safeTop: {
    flex: 0,
    backgroundColor: 'rgb(229, 222, 216)',
  },
  safeBottom: {
    flex: 1,
    // backgroundColor: 'pink'
  },
});

export default App;
