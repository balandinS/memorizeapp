import React from 'react';
import {Text, View} from 'react-native';

const Item = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
};

export default Item;
