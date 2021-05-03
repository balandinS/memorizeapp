import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {COLORS} from '../../utilities/constans';
import {widthScreen} from '../../utilities/utilities';
const ItemCarousel = (props) => {
  return (
    <View style={styles.carouselItem}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

// 


const Carousel = (props) => {
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;
  const [intervals, setIntervals] = useState(1);
  const [interval, setInterval] = useState(1);
  const [width, setWidth] = useState(0);
  const [items, setItems] = useState([
    {
      title: 'Women Collection',
      text: 'Rich selection for choosing clothes',
    },
    {
      title: 'Men Collection',
      text: 'Rich selection for choosing clothes',
    },
    {
      title: 'Child Collection',
      text: 'Rich selection for choosing clothes',
    },
  ]);

  const init = (w) => {
    setWidth(w);
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        console.log('offset < (width / intervals) --> ', intervals);
        return i;
      }
      if (i == intervals) {
        console.log('offset == (width / intervals) --> ', intervals);
        return i;
      }
    }
  };
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{width: `${100 * intervals}%`}}
        showsHorizontalScrollIndicator={false}
       
        decelerationRate="fast"
        onContentSizeChange={(w, h) => {
          init(w);
        }}
        onScroll={data => {
          console.log('interval --> ', interval);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled>
        {items.map((item, index) => (
          <ItemCarousel
            key={index}
            title={item.title}
            text={item.text}
            isSelected={item.isSelected}
          />
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
      {items.map((item, index) => {
        return <View key={index} style={ index === interval - 1 ? selectedDot :  styles.dot} />
         
      })}
      </View>
      
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselItem: {
    height: 200,
    width: widthScreen,
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
  dotContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  dot: {
    height: 7,
    width: 7,
    borderRadius: 7 / 2,
    backgroundColor: COLORS.gray,
    margin: 5,
    opacity: .4
  },
  selectedDot: {
    backgroundColor: COLORS.white,
    transform: [{scale: 1.5}],
    opacity: .7
  },
});

const selectedDot = StyleSheet.flatten([styles.dot, styles.selectedDot]);
