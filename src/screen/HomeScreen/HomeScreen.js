import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../utilities/constans';
import TabCategories from '../../component/TabCategories';
import HeaderWithImage from '../../component/HeaderWithImage';
import Title from '../../component/Title';
import {selectedTabSelector} from '../../store/selector';
import {verticalScale} from '../../utilities/screenUtilities';
import SliderSettings from '../../component/SliderSettings';
const HomeScreen = () => {
  const selectedTab = useSelector(selectedTabSelector);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <HeaderWithImage
          src={require('../../assessts/images/headerImagejpg.jpg')}
        />
      </View>
      <View style={styles.titleConatiner}>
        <Title
          title={`${selectedTab}'s Clothing`}
          subtitle="variety to choose"
        />
        <SliderSettings />
      </View>
      <TabCategories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: verticalScale(200),
  },
  titleConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    padding: 5,
    height: verticalScale(60),
  },
});
