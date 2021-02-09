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


const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
       <View style={styles.statusBarBG} />
          <StatusBar backgroundColor={'white'} translucent={false} hidden={false} barStyle="dark-content" />
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
