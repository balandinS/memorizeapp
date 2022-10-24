import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import Card from './Card';
const CardsList = (props) => {
  return (
    <View style={{flex: 1}}>
      <Card title={props.title} subtitle={props.subtitle} />
      <Card title={props.title} subtitle={props.subtitle} />
    </View>
  );
};

export default CardsList;

const styles = StyleSheet.create({});
