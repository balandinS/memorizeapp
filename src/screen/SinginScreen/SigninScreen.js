import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import analytics from '@react-native-firebase/analytics';
const SigninScreen = () => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <View>
        <Button
          title="Add To Basket"
          onPress={async () =>
            await analytics().logEvent('basket', {
              id: 3745092,
              item: 'mens grey t-shirt',
              description: ['round neck', 'long sleeved'],
              size: 'L',
            })
          }
        />
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({});
