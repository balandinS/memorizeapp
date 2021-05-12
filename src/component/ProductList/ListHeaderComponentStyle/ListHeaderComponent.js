import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {verticalScale, scale} from '../../../utilities/screenUtilities';
import SubCategorie from '../../SubCategorie';
import type {Props} from '../ListType';

const ListHeaderComponent = (props: Props) => {
  const {values} = props;
  if (values.length === 0) {
    return null;
  }
  return (
    <View style={{height: verticalScale(200)}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        scrollEventThrottle={200}>
        {values.map((item, index) => {
          return (
            <View key={`${index}`} style={styles.subcategoriesContainer}>
              <SubCategorie subcategorie={item} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  subcategoriesContainer: {
    height: verticalScale(195),
    width: scale(140),
    margin: 5,
  },
});
