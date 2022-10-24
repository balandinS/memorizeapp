import React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import img from '../../assessts/images/headerImagejpg.jpg';
import Text from '../Text';
import {COLORS} from '../../utilities/constans';
import {widthScreen} from '../../utilities/utilities';
import Carousel from '../Carousel';
type Props = {
  src: string | number,
};

const HeaderWithImage = (props: Props) => {
  const [isLoadWithError, setIsLoadWithError] = React.useState(false);
  const [imageHeight, setImageHeight] = React.useState(0);
  React.useEffect(() => {
    initailSizeImage();
  }, [props.src]);

  // responsive image size  height , width
  const initailSizeImage = () => {
    // image uri source
    if (typeof props.src === 'string') {
      console.log('initailSizeImage string');
    }
    // required image source
    if (typeof props.src === 'number') {
      const imageH = Image.resolveAssetSource(props.src).height;
      const imageW = Image.resolveAssetSource(props.src).width;
      setImageSize(imageW, imageH);
    }

    console.log('initailSizeImage');
  };

  const setImageSize = (imageH, imageW) => {
    const imageRatio = imageW / widthScreen;
    const imageHeight = Math.round(imageH / imageRatio);
    if (imageHeight > 0) {
      setImageHeight(imageHeight);
    }
  };
  // fail load image
  const handleOnError = (error) => {
    if (__DEV__) {
      console.log('[HeaderWithImage] error load --> ', error);
    }
    if (error) {
      setIsLoadWithError(true);
    }
  };
  // success load image
  const onLoadImage = () => {
    if (isLoadWithError) {
      setIsLoadWithError(false);
    }
  };

  // render
  if (isLoadWithError) {
    return null;
  }
  return (
    <View style={StyleSheet.flatten([styles.container, {height: imageHeight}])}>
      <ImageBackground
        onError={handleOnError}
        onLoad={onLoadImage}
        blurRadius={10}
        style={{height: imageHeight}}
        source={props.src}
        fadeDuration={2}>
        <Carousel itemsPerInterval={1} height={imageHeight} />
      </ImageBackground>
    </View>
  );
};

export default HeaderWithImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: 'hidden',
  },
  textContainer: {
    height: 200,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.white,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.white,
  },
});
