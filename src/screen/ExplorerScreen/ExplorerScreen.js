import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Formik} from 'formik';
import Title from '../../component/Title';
import InputText from '../../component/InputText';
import {COLORS} from '../../utilities/constans';
import {scale, verticalScale} from '../../utilities/screenUtilities';

const ExplorerScreen = () => {
  const debounce = (fn, ms) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
      clearTimeout(timeout);
      timeout = setTimeout(fnCall, ms);
    };
  };
  const submit = debounce(onSubmitAction, 200);
  function onSubmitAction(values) {
    console.log('[debounce]', values);
  }
  return (
    <View style={styles.container}>
      <View style={styles.contianerTitle}>
        <View style={styles.blockTitle}>
          <Title size={45} title="Explore" />
        </View>

        <View style={styles.formConatiner}>
          <View style={styles.containerIcon}>
            <Icon size={25} name="search" color={COLORS.graydark} />
          </View>
          <Formik
            initialValues={{
              search: '',
            }}
            onSubmit={submit}>
            {({values, handleChange, handleSubmit, setFieldTouched}) => (
              <View style={styles.inputconatiner}>
                <InputText
                  value={values.search}
                  style={styles.input}
                  handleSubmit={handleSubmit}
                  onChangeText={handleChange('search')}
                  label="Search"
                />
              </View>
            )}
          </Formik>
        </View>
      </View>
      <View />
    </View>
  );
};

export default ExplorerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contianerTitle: {
    height: verticalScale(110),
    paddingVertical: scale(15),
    paddingHorizontal: scale(20),
  },
  blockTitle: {
    height: verticalScale(50),
  },
  formConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    borderRadius: 20,
    height: verticalScale(50),
    padding: 10,
  },
  containerIcon: {
    justifyContent: 'center',
    height: verticalScale(50),
    width: scale(25),
    paddingHorizontal: scale(1),
    paddingVertical: scale(1),
  },
  inputconatiner: {
    paddingHorizontal: scale(20),
  },
});
