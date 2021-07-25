/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  UIManager,
} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {colorSafeAreaSelector} from './src/store/selector';
import ReduxStore from './src/store';
import Router from './src/routers';
import {COLORS} from './src/utilities/constans';
import MoadalPopup from './src/component/ModalPopup';
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBarBG} />
      <StatusBar
        backgroundColor={COLORS.beige}
        translucent={false}
        hidden={false}
        barStyle="dark-content"
      />
      <Provider store={ReduxStore.store}>
        <PersistGate loading={null} persistor={ReduxStore.persistor}>
          <SafeAreaViewGroup>
            <Router />
            <MoadalPopup />
          </SafeAreaViewGroup>
        </PersistGate>
      </Provider>
    </View>
  );
};
const SafeAreaViewGroup = (props) => {
  const safeAreaColor = useSelector(colorSafeAreaSelector);
  return (
    <>
      <SafeAreaView
        style={[styles.safeTop, {backgroundColor: safeAreaColor}]}
      />
      <SafeAreaView
        style={[styles.safeBottom, {backgroundColor: safeAreaColor}]}>
        {props.children}
      </SafeAreaView>
    </>
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
  },
  safeBottom: {
    flex: 1,
  },
});

export default App;
