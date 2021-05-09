import React, {useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {CAROUSEL_DATA} from '../../utilities/constans';
import PropTypes from 'prop-types';
import CarouselItem from './CarouselComponents/CarouselItem';
import Bullets from './CarouselComponents/Bullets';

const Carousel = (props) => {
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;
  const [intervals, setIntervals] = useState(1);
  const [interval, setInterval] = useState(1);
  const [width, setWidth] = useState(0);
  const items = useRef(CAROUSEL_DATA).current;

  const init = (w) => {
    setWidth(w);
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        onContentSizeChange={(w, h) => {
          init(w);
        }}
        onScroll={(data) => {
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled>
        {items.map((item, index) => (
          <CarouselItem key={index} title={item.title} text={item.text} />
        ))}
      </ScrollView>
      <Bullets interval={interval} items={items} />
    </View>
  );
};

Carousel.propTypes = {
  itemsPerInterval: PropTypes.number.isRequired,
};

export default Carousel;
