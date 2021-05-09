import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../../utilities/constans';
import TabCategories from '../../component/TabCategories';
import HeaderWithImage from '../../component/HeaderWithImage';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Title from '../../component/Title';
import {selectedTabSelector} from '../../store/selector';
import {verticalScale} from '../../utilities/screenUtilities';
const HomeScreen = () => {
  const selectedTab = useSelector(selectedTabSelector);
  return (
    <View style={styles.container}>
      <View style={{height: verticalScale(250)}}>
        <HeaderWithImage />
      </View>
      <View style={styles.titleConatiner}>
        <Title
          title={`${selectedTab}'s Clothing`}
          subtitle="variety to choose"
        />
        <View>
          <Icon name="sliders" color={COLORS.graydark} size={22} />
        </View>
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
  titleConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    padding: 5,
    height: verticalScale(55),
  },
});
