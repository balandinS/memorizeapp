import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Pressable,
  ImageBackground,
} from 'react-native';
import {COLORS, MODAL_TYPES} from '../../utilities/constans';
import {useSelector} from 'react-redux';
import Button from '../Button';
import Text from '../Text';
import img from '../../assessts/images/modalContent.jpg';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  modalContentSelector,
  modalTitleSelector,
  isModalVisableSelector,
} from '../../store/selector';
const MoadalPopup = () => {

  const isModalVisable = useSelector(isModalVisableSelector);
  const modalTitle = useSelector(modalTitleSelector);
  const modalContent = useSelector(modalContentSelector);
  const closebale = useSelector()

  const renderOneBtnModal = () => (
    <View style={{flex: 1, padding: 0}}>
      <ImageBackground source={img} style={styles.bodyModal}>
        <View style={{flex: 1, justifyContent: 'center', marginTop: 25}}>
          {!!modalTitle && <Text style={flattern}>{modalTitle}</Text>}
          <Text style={styles.textModal}>{modalContent}</Text>
        </View>
      </ImageBackground>
      <View style={styles.footerModal}>
        <Button contnet="OK, yes sure" />
      </View>
    </View>
  );
  const renderModalByType = (modalType) => {
    switch (modalType) {
      case MODAL_TYPES.oneBtnVer:
        return renderOneBtnModal();

      default:
        break;
    }
  };
  return (
    <Modal transparent={true} visible={isModalVisable} animationType="fade">
      <Pressable onPress={() => setstate(false)} style={{flex: 1}} disabled={}>
        <View style={styles.modalContainer}>
          <View style={styles.mdl}>
            {renderModalByType(MODAL_TYPES.oneBtnVer)}
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default MoadalPopup;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.black_50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 0,
  },
  mdl: {
    height: 350,
    width: 300,
    backgroundColor: COLORS.white,
    margin: 20,
    overflow: 'hidden',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  bodyModal: {
    flex: 5,
    justifyContent: 'center',
  },
  footerModal: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textModal: {
    color: Colors.white,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '400',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 25,
    padding: 5,
    paddingHorizontal: 10,
  },
});

const flattern = StyleSheet.flatten([styles.textModal, styles.title]);
