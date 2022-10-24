import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../../component/Title';
import Text from '../../component/Text';
import BookedTab from '../../component/BookedTab';
import {COLORS} from '../../utilities/constans';
import {verticalScale, scale} from '../../utilities/screenUtilities';
const BookedScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.titleHolder}>
          <Title title="Wish List" size={scale(20)} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.editText}>Edit</Text>
        </View>
      </View>
      <BookedTab />
    </View>
  );
};

export default BookedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerTitle: {
    height: verticalScale(30),
    flexDirection: 'row',
    paddingHorizontal: scale(12),
  },
  textContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleHolder: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    color: COLORS.graydark,
    fontSize: scale(14),
  },
});
