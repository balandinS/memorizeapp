/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import ReduxStore from './src/store';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarBG} />
      <StatusBar
        backgroundColor={'white'}
        translucent={false}
        hidden={false}
        barStyle="dark-content"
      />
      <Provider store={ReduxStore.store}>
        <PersistGate loading={null} persistor={ReduxStore.persistor}>
          <SafeAreaView style={styles.safeTop} />
          <SafeAreaView style={styles.safeBottom}>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  statusBarBG: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'red',
    zIndex: 3,
  },
  safeTop: {
    flex: 0,
    backgroundColor: 'white',
  },
  safeBottom: {
    flex: 1,
    // backgroundColor: 'pink'
  },
});

export default App;
